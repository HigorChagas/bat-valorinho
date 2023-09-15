import Jogador from '../Jogador';
import './Funcoes.css';

const Funcoes = (props) => {
    const BkgColor = { backgroundColor: props.corPrimaria }

    return (
        (props.jogadores.length > 0) && <section className="funcoes" style={ BkgColor }>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map( jogador => <Jogador corDeFundo={props.corSecundaria} key={jogador.nome} nome={jogador.nome} agente={jogador.agente} imagem={jogador.imagem} />)}
            </div>
        </section>
    )
}

export default Funcoes;