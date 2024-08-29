import { useContext, useEffect, useState } from "react";
import CardTemas from "../cardtemas/CardTemas";
import Tema from "../../../models/Tema";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { buscar } from "../../../service/Service";


function ListaTemas() {

    const navigate = useNavigate();

    const [temas, setTemas] = useState<Tema[]>([]);

    const { handleLogout, usuario } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            });

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    // Monitorar o Token
    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!');
            navigate('/')
        }
    }, [token]);

    // Monitorar o Estado temas
    useEffect(() => {
        buscarTemas();
    }, [temas.length])


    return (
        <>

{temas.length === 0 && (
    <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="border flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md animate-pulse">
                        <header className="py-2 px-6 bg-sky-950 text-white font-bold text-2xl">Tema</header>
                        <div className="p-8 bg-sky-50 flex-grow">
                            <div className="h-4 bg-slate-700 rounded w-3/4 mb-4"></div>
                            <div className="h-3 bg-slate-700 rounded w-full mb-2"></div>
                            <div className="h-3 bg-slate-700 rounded w-5/6"></div>
                        </div>
                        <div className="flex">
                            <div className="w-full font-bold text-slate-100 bg-slate-500 flex items-center justify-center py-2">
                                <div className="h-4 bg-slate-700 rounded w-1/3"></div>
                            </div>
                            <div className="w-full font-bold text-slate-100 bg-slate-600 flex items-center justify-center">
                                <div className="h-4 bg-slate-700 rounded w-1/3"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)}


            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {temas.map((tema) => (
                            <CardTemas key={tema.id} tema={tema} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaTemas;