import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FormularioPostagens from '../formulariopostagens/Formulario.Postagens';

function ModalPostagens() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-sky-600'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormularioPostagens />
            </Popup>
        </>
    );
}

export default ModalPostagens;