import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { RotatingLines } from "react-loader-spinner";
import { buscar, deletar } from "../../../service/Service";

function DeletarTema() {

    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate('/temas')
    }

    /**
     * Criamos a função deletarTema, responsável por deletar 
     * um tema da aplicação (DELETE).
     */
    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: { Authorization: token }
            })
            alert('O Tema foi apagado com sucesso!')
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else{
                alert('Erro ao Excluir o Tema!')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
      <div className='container w-1/3 mx-auto mt-16'>
          <h1 className='text-4xl font-semibold text-center my-4'>Deletar tema</h1>
          <p className='text-center font-semibold mb-4'>
              Você tem certeza de que deseja apagar o tema a seguir?</p>
          <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
              <header 
                  className='py-2 px-6 bg-sky-950 text-white font-bold text-2xl'>
                  Tema
              </header>
              <p className='p-8 text-3xl bg-sky-50 h-full'>{tema.nome}</p>
              <p className='p-8 text-3xl bg-sky-50 h-full'>{tema.descricao}</p>
              <div className="flex">
                  <button 
                      className='text-slate-100 bg-slate-500 hover:bg-sky-950 w-full py-2'
                      onClick={retornar}
                      >
                      Não
                  </button>
                  <button 
                      className='w-full text-slate-100 bg-slate-600 
                                 hover:bg-red-950 flex items-center justify-center'
                      onClick={deletarTema}
                      >
                      {isLoading ? <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                  /> :
                      <span>Sim</span>
                  }
                  </button>
              </div>
          </div>
      </div>
  )
  
}
export default DeletarTema