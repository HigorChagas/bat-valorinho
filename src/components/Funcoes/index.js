import Jogador from '../Jogador';
import './Funcoes.css';

const Funcoes = ({ jogadores, corSecundaria, nome, corPrimaria, aoDeletar }) => {
    return (
        (jogadores.length > 0) && <section className="funcoes" style={{backgroundColor: corPrimaria}}>
            <h3 style={{ borderColor: corSecundaria }}>{nome}</h3>
            <div className='jogadores'>
                {jogadores.map((jogador, indice) => {                 
                    return <Jogador 
                    corDeFundo={corSecundaria} 
                    key={indice} 
                    nome={jogador.nome} 
                    agente={jogador.agente} 
                    imagem={jogador.imagem} 
                    aoDeletar={aoDeletar} 
                    />
                })}
            </div>
        </section>
    )
}

export default Funcoes;