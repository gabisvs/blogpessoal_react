import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <>
        <div className="
        flex 
        justify-center 
        bg-sky-950 
        text-white
        ">

          <div className="
          container 
          flex 
          flex-col 
          items-center 
          py-4
          ">

            <p className="
            text-xl 
            font-bold
            ">
                Blog pessoal Generation | Copyright: </p>

            <p className="text-lg
            ">
                Acesse nossas redes sociais</p>

            <div className="
            flex 
            gap-2
            ">
              <LinkedinLogo size={48} weight="fill" />
              <InstagramLogo size={48} weight="fill" />
              <FacebookLogo size={48} weight="fill" />

            </div>
          </div>
        </div>
      </>
  )
}
