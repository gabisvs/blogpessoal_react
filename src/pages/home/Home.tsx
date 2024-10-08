import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";
import ModalPostagens from "../../components/postagem/modalpostagens/ModalPostagens";

function Home() {
  return (
    <>
    <div className="
       bg-gradient-to-b from-sky-600 to-sky-950 flex justify-center">

      <div className="container grid grid-cols-2 text-white">

        <div className="flex flex-col gap-4 items-center justify-center py-4">

          <h2 className="text-5xl font-bold">
            Seja Bem-Vindo!</h2>

          <p className="text-xl">
            Expresse aqui seus pensamentos e opiniões.</p>

          <div className="flex justify-around gap-">
          <ModalPostagens />
          {/* <button className="rounded border-white border-solid border-2 py-2 px-4"></button> */}
            </div>
          </div>

        
        <div className="flex justify-center">
          <img src="https://i.imgur.com/d4jZqfU.png" alt="Imagem da Página Home"
            className="w-2/3" />
        </div>
      </div>
    </div>
    <ListaPostagens />
    </>
  );
}

export default Home;