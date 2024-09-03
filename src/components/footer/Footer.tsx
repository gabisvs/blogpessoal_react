import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import AuthContext from '../../contexts/AuthContext'
import { ReactNode, useContext } from 'react'

export default function Footer() {

let data = new Date().getFullYear()

const { usuario} = useContext(AuthContext)

let component: ReactNode;

if(usuario.token !== ""){

  component = (
    <div className="flex justify-center bg-sky-950 text-white">

          <div className="container flex flex-col items-center py-4">

            <p className="text-xl font-bold">
                Blog pessoal Generation | Copyright: {data}
                </p>

            <p className="text-lg">
                Acesse nossas redes sociais</p>

            <div className="flex gap-2">
              <a href="" target="_blank">
              <LinkedinLogo size={48} weight="fill" />
              </a>
                <a href="" target="_blank">
                <InstagramLogo size={48} weight="fill" />
                </a>
                <a href="" target="_blank">
                <FacebookLogo size={48} weight="fill"/>
                </a>
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
