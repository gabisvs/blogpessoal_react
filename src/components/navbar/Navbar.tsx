import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "sucesso");
    navigate("/")
  }

  let component: ReactNode;

  if (usuario.token !== ""){

component = (

  <div className=" w-full bg-sky-600 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">

          <Link to="/home" className="text-2x1 font-bold ml-4"> Blog Pessoal </Link>

          <div className="flex gap-4">
            <Link to="/login" className="hover:underline font-bold">Login</Link>
            <Link to="/home" className="hover:underline font-bold">Home</Link>
            <Link to="/postagens" className="hover:underline font-bold">Postagens</Link>
            <Link to="/temas" className="hover:underline font-bold">Temas</Link>
            <Link to="/cadastroTema" className="hover:underline font-bold">Cadastrar tema</Link>
            <Link to="/perfil" className="hover:underline font-bold">Perfil</Link>
            <Link to='' onClick={logout} className="hover:underline font-bold mr-4">Sair</Link>

          </div>
        </div>
      </div>

)
  }


  return (
    <>
      { component }
    </>
  )
}
export default Navbar
