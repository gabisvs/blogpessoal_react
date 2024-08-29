// import { Link } from 'react-router-dom'
// import Tema from '../../../models/Tema'

// interface CardTemasProps{
//   tema: Tema
// }

// function CardTemas({tema}: CardTemasProps) {
//   return (
//     <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
//       <header className='py-2 px-6 bg-sky-950 text-white font-bold text-2xl'>Tema</header>
//       <p className='p-8 font-bold text-3xl bg-sky-50 h-full'>{tema.nome}</p>
//       <p className='p-8 text-3xl bg-sky-50 h-full'>{tema.descricao}</p>
//       <div className="flex">
//         <Link to='' className='w-full font-bold text-slate-100 bg-slate-500 hover:bg-sky-950 flex items-center justify-center py-2'>
//           <button>Editar</button>
//         </Link>
//         <Link to='' className='font-bold text-slate-100 bg-slate-600 hover:bg-red-950 w-full flex items-center justify-center'>
//           <button>Deletar</button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default CardTemas

import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps {
  tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-sky-950 text-white font-bold text-2xl'>Tema</header>
      <div className='p-8 bg-sky-50 flex-grow'>
        <p className='font-semibold text-3xl'>{tema.nome}</p>
        <p className='text-xl mt-2'>{tema.descricao}</p>
      </div>
      <div className="flex">
        <Link to={`/editartema/${tema.id}`} className='w-full font-bold text-slate-100 bg-slate-500 hover:bg-sky-950 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletartema/${tema.id}`} className='font-bold text-slate-100 bg-slate-600 hover:bg-red-950 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas
