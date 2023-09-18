import './Jogador.css'; 
import { AiFillCloseCircle } from 'react-icons/ai';

const Jogador = ({ nome, imagem, agente, corDeFundo, aoDeletar }) => {
    return (
        <div className='jogador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar} />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{agente}</h5>
            </div>
        </div>
    );
}

export default Jogador;