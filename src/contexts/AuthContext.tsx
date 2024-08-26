import { createContext, ReactNode, useState } from "react"
import UsuarioLogin from "../models/Usuario login"
import { login } from "../service/Service"

interface AuthContextProps{
    usuario: UsuarioLogin
    handleLogin(usuario: UsuarioLogin): Promise<void>
    handleLogout(): void
    isLoading: boolean
}

interface AuthProviderProps{
    children: ReactNode
}

// Cria uma nova instância da API Context
export const AuthContext = createContext({} as AuthContextProps)

// Cria o provedor
export function AuthProvider({ children }: AuthProviderProps) {

 const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: ""
 })

 const [isLoading, setIsLoading] = useState(false);

 async function handleLogin(usuarioLogin: UsuarioLogin) {

    setIsLoading(true);

    try{
await login(`/usuarios/logar`, usuarioLogin, setUsuario);
alert("Usuário autenticado com sucesso!")

    }catch(error){
        alert("Os dados do usuário estão insosistentes! ")

    }

    setIsLoading(false);
 }

function handleLogout() {
    setUsuario({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: "" 
    })
}
  return (
    // Renderizando a Context na aplicação React 
    <AuthContext.Provider value= {{usuario, handleLogin, handleLogout, isLoading}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext


