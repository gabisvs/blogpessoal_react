// import { Link } from 'react-router-dom'
// import Postagem from '../../../models/Postagem'

// interface CardPostagensProps {
//     post: Postagem
//   }

//   function CardPostagens({post}: CardPostagensProps) {
//     return (
//     <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
//       <div>
//         <div className="flex w-full bg-sky-950 py-2 text-white px-4 items-center gap-4">
//           <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
//           <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
//         </div>
//         <div className='p-4 bg-sky-50'>
//           <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
//           <p>{post.texto}</p>
//           <p>Tema: {post.tema?.descricao}</p>
//           <p>Data: {new Intl.DateTimeFormat(undefined, {
//                     dateStyle: 'full',
//                     timeStyle: 'medium',
//                   }).format(new Date(post.data))}</p>
//         </div>
//       </div>
//       <div className="flex">
//       <Link to={`/editarPostagem/${post.id}`} className='w-full font-bold text-white bg-slate-500 hover:bg-sky-950 flex items-center justify-center py-2'>
//           <button>Editar</button>
//         </Link>
//         <Link to={`/deletarPostagem/${post.id}`} className='font-bold text-white bg-slate-600 hover:bg-red-950 w-full flex items-center justify-center'>
//           <button>Deletar</button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default CardPostagens


import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    post: Postagem
}

function CardPostagens({ post}: CardPostagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

            <div>
                <div className="text-slate-100 flex w-full bg-sky-950 py-2 px-4 items-center gap-4">
                    <img
                        src={post.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={post.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {post.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                    <p>{post.texto}</p>
                    <p>Tema: {post.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(post.data))}</p>
                </div>
            </div>
            <div className="flex">
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
    )
}

export default CardPostagens