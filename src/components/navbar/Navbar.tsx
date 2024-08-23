function Navbar() {
  return (
    <>
     <div className="
     w-full 
     bg-sky-600
     text-white 
     flex 
     justify-center 
     py-4
     ">
          <div className="
          container 
          flex 
          justify-between 
          text-lg
          ">
            <div className="
            text-2xl 
            font-bold 
            uppercase
            ">
                Blog Pessoal</div>

            <div className="
            flex 
            gap-4
            ">
              <div className="
              hover:underline
              font-bold
              ">
                Postagens</div>

              <div className="
              hover:underline
              font-bold
              ">
                Temas</div>

              <div className="
              hover:underline
              font-bold
              ">
                Cadastrar tema</div>

              <div className="
              hover:underline
              font-bold
              ">
                Perfil</div>

              <div className="
              hover:underline
              font-bold
              ">
                Sair</div>

            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
