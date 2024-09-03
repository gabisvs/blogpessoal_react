
// import { Link } from 'react-router-dom'
// import Postagem from '../../../models/Postagem'

// interface CardPostagensProps {
//     post: Postagem
// }

// function CardPostagens({ post}: CardPostagensProps) {
//     return (
//         <div className='border-slate-900 border 
//             flex flex-col rounded overflow-hidden justify-between'>

//             <div>
//                 <div className="text-slate-100 flex w-full bg-sky-950 py-2 px-4 items-center gap-4">
//                     <img
//                         src={post.usuario?.foto}
//                         className='h-12 rounded-full'
//                         alt={post.usuario?.nome} />
//                     <h3 className='text-lg font-bold text-center uppercase'>
//                         {post.usuario?.nome}
//                     </h3>
//                 </div>
//                 <div className='p-4 '>
//                     <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
//                     <p>{post.texto}</p>
//                     <p>Tema: {post.tema?.descricao}</p>
//                     <p>Data: {new Intl.DateTimeFormat(undefined, {
//                         dateStyle: 'full',
//                         timeStyle: 'medium',
//                     }).format(new Date(post.data))}</p>
//                 </div>
//             </div>
//             <div className="flex">
//                 <Link to={`/editarpostagem/${post.id}`}
//                     className='w-full text-slate-100 bg-slate-500 hover:bg-sky-950
//                                flex items-center justify-center py-2'>
//                     <button>Editar</button>
//                 </Link>
//                 <Link to={`/deletarpostagem/${post.id}`}
//                     className='text-white bg-slate-600
// 	                           hover:bg-red-950 w-full flex items-center justify-center'>
//                     <button>Deletar</button>
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default CardPostagens






// CODIGO POSTAGENS LATERAIS FOTO NORMAL

// import { Link } from 'react-router-dom';
// import Postagem from '../../../models/Postagem';

// interface CardPostagensProps {
//     post: Postagem;
// }

// function CardPostagens({ post }: CardPostagensProps) {
//     return (
//         <div className='border-slate-900 border flex flex-col rounded overflow-hidden bg-sky-50'>

//             <div className="flex items-center gap-4 p-4 bg-sky-950 text-white">
//                 <img
//                     src={post.usuario?.foto}
//                     className='h-16 w-16 rounded-full'
//                     alt={post.usuario?.nome}
//                 />
//                 <div className='flex flex-col items-center'>
//                     <h3 className='text-lg font-bold'>{post.usuario?.nome}</h3>
//                 </div>
//             </div>

//             <div className='p-4'>
//                 <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
//                 <p>{post.texto}</p>
//             </div>
            
//             <div className='p-4'>
//                 <p className='text-gray-600'>Tema: {post.tema?.descricao}</p>
//                 <p className='text-gray-600'>Data: {new Intl.DateTimeFormat(undefined, {
//                     dateStyle: 'full',
//                     timeStyle: 'medium',
//                 }).format(new Date(post.data))}</p>
//             </div>

//             <div className="flex">
//                 <Link to={`/editarpostagem/${post.id}`}
//                     className='w-full text-slate-100 bg-slate-500 hover:bg-sky-950
//                                flex items-center justify-center py-2'>
//                     <button>Editar</button>
//                 </Link>
//                 <Link to={`/deletarpostagem/${post.id}`}
//                     className='text-white bg-slate-600 hover:bg-red-950
//                                w-full flex items-center justify-center py-2'>
//                     <button>Deletar</button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default CardPostagens;




// CODIGO FOTO LATERAL

import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';

interface CardPostagensProps {
    post: Postagem;
}

function CardPostagens({ post }: CardPostagensProps) {
    return (
        <div className='border-slate-900 border flex flex-row rounded overflow-hidden justify-between mb-4 w-full'>

            <div className='w-1/4 p-4 flex flex-col items-center justify-center bg-sky-950'> {/* Fundo da foto e nome com cor sky-950 */}
                <img
                    src={post.usuario?.foto}
                    className='h-32 w-32 object-cover rounded-full' // Tamanho da imagem aumentado
                    alt={post.usuario?.nome} />
                <h3 className='text-lg font-bold uppercase text-white mt-2'>
                    {post.usuario?.nome}
                </h3>
            </div>

            <div className='w-3/4 p-4 flex flex-col justify-between bg-sky-50 rounded'> {/* Fundo do conteúdo alterado para sky-50 */}
                <div>
                    <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                    <p className='mt-2'>{post.texto}</p>
                </div>

                <div className='mt-4'>
                    <p className='text-sm text-gray-600'>Tema: {post.tema?.descricao}</p>
                    <p className='text-sm text-gray-600'>
                        Data: {new Intl.DateTimeFormat(undefined, {
                            dateStyle: 'full',
                            timeStyle: 'medium',
                        }).format(new Date(post.data))}
                    </p>
                </div>

                <div className="flex mt-4">
                    <Link to={`/editarpostagem/${post.id}`}
                        className='w-full text-slate-100 bg-slate-500 hover:bg-sky-950
                               flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarpostagem/${post.id}`}
                        className='text-white bg-slate-600
	                           hover:bg-red-950 w-full flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardPostagens;








