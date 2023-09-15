import { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {



    const [nome, setNome] = useState('');
    const [agente, setAgente] = useState('');
    const [imagem, setImagem] = useState('');
    const [funcao, setFuncao] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoJogadorCadastrado({
            nome,
            agente,
            imagem,
            funcao
        });
        setNome('');
        setAgente('');
        setImagem('');
        setFuncao('');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Agente"
                    placeholder="Digite seu agente"
                    valor={agente}
                    aoAlterado={valor => setAgente(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Função"
                    itens={props.funcoes}
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario;