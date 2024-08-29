import Postagem from "./Postagem";

export default interface Tema{
    id: number;
    nome: string;
    descricao: string;
    postagem?: Postagem | null;
}