import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./components/temas/listatemas/ListaTemas"
import FormularioTema from "./components/temas/formulariotemas/FormularioTemas"
import DeletarTema from "./components/temas/deletartemas/DeletarTemas"
import ListaPostagens from "./components/postagem/listapostagens/ListaPostagens"
import FormularioPostagens from "./components/postagem/formulariopostagens/Formulario.Postagens"
import DeletarPostagens from "./components/postagem/deletarpostagens/DeletarPostagens"




function App() {

  // Código TypeScript (fora do return)

  return (
    // Código TSX => HTML + CSS
    <>
    <AuthProvider> 
    <BrowserRouter> 
      <Navbar />
      <div className="min-h-[80vh]"> 
      <Routes> 
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/temas" element={<ListaTemas />} />
      <Route path="/cadastrotema" element={<FormularioTema />} />
      <Route path="/editartema/:id" element={<FormularioTema />} />
      <Route path="/deletartema/:id" element={<DeletarTema />} />
      <Route path="/postagens" element={<ListaPostagens />} />
      <Route path="/cadastroPostagem" element={<FormularioPostagens />} />
      <Route path="/editarPostagem/:id" element={<FormularioPostagens />} />
      <Route path="/deletarPostagem/:id" element={<DeletarPostagens />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
