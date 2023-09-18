import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Funcoes from './components/Funcoes';
import Footer from './components/Footer';

function App() {

  const funcoes = [
    {
      nome: 'Duelista',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'Controlador',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
    {
      nome: 'Iniciador',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Sentinela',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    }
  ];

  const [jogadores, setJogadores] = useState([]);

  const deletarJogador = () => {
    console.log('Deletando Jogador');
  }

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador]);
  }
  return (
    <div className="App">
      <Banner />
      <Formulario funcoes={funcoes.map(funcao => funcao.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)} />
      {funcoes.map(funcao => <Funcoes
        key={funcao.nome}
        nome={funcao.nome}
        corPrimaria={funcao.corPrimaria}
        corSecundaria={funcao.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.funcao === funcao.nome)}
        aoDeletar={deletarJogador}
      />
      )}
      <Footer />

    </div>
  );
}

export default App;
