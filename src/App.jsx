import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background'
import CartasHome from './components/CartasHome'
import Header from './components/Header'
import LayoutCartas from './components/LayoutCartas'

function App() {

  const [exibeFrom, setExibeForm] = useState(false)

  const dadosDasCriaturas = {
    mago: {
      fogo: {
        criatura: "Mago",
        tipo: "Fogo",
        imagem: "/criaturas/mago-fogo.png"
      },
      gelo: {
        criatura: "Mago",
        tipo: "Gelo",
        imagem: "/criaturas/mago-gelo.png"
      },
      relampago: {
        criatura: "Mago",
        tipo: "Relâmpago",
        imagem: "/criaturas/mago-relampago.png"
      },
    },
    goblin: {
      arqueiro: {
        criatura: "Goblin",
        tipo: "Arqueiro",
        imagem: "/criaturas/goblin-arqueiro.png"
      },
      guerreiro: {
        criatura: "Goblin",
        tipo: "Guerreiro",
        imagem: "/criaturas/goblin-guerreiro.png"
      },
      gigante: {
        criatura: "Goblin",
        tipo: "Gigante",
        imagem: "/criaturas/goblin-gigante.png"
      },
    },
    dragao: {
      fogo: {
        criatura: "Dragão",
        tipo: "Fogo",
        imagem: "/criaturas/dragao-fogo.png"
      },
      gelo: {
        criatura: "Dragão",
        tipo: "Gelo",
        imagem: "/criaturas/dragao-gelo.png"
      },
      relampago: {
        criatura: "Dragão",
        tipo: "Relâmpago",
        imagem: "/criaturas/dragao-relampago.png"
      },
    },
    marinha: {
      kraken: {
        criatura: "Marinha",
        tipo: "Kraken",
        imagem: "/criaturas/kraken.jpeg"
      },
      leviata: {
        criatura: "Marinha",
        tipo: "Leviatã",
        imagem: "/criaturas/leviata.jpeg"
      },
      sereia: {
        criatura: "Marinha",
        tipo: "Sereia",
        imagem: "/criaturas/sereia.jpeg"
      },
    },
    mortovivo: {
      esqueleto: {
        criatura: "Morto-Vivo",
        tipo: "Esqueleto",
        imagem: "/criaturas/esqueleto.png"
      },
      zumbi: {
        criatura: "Morto-Vivo",
        tipo: "Zumbi",
        imagem: "/criaturas/zumbi.png"
      },
      fantasma: {
        criatura: "Morto-Vivo",
        tipo: "Fantasma",
        imagem: "/criaturas/fantasma.png"
      },
    }
  }

  const [criatura, setCriatura] = useState("");
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState('Nome');
  const [nivel, setNivel] = useState(0);
  const [dano, setDano] = useState(0);
  const [ataque, setAtaque] = useState(0);
  const [defesa, setDefesa] = useState(0);
  const [fundo, setFundo] = useState('/background/fundo-carta.jpg');
  const [raridade, setRaridade] = useState('carta-comum')

  const mudaFundo = () => {
    let fundoDefinido = ''
    if (criatura === '' || tipo === '') {
      fundoDefinido = '/background/fundo-carta.jpg'
    } else {
      fundoDefinido = dadosDasCriaturas[criatura][tipo].imagem
    }
    setFundo(fundoDefinido)
  }
  useEffect(() => {
    mudaFundo();
  }, [tipo, criatura])
  const mudaCriatura = (e) => {
    setCriatura(e.target.value);
    setTipo('');
  }
  const mudaTipo = (e) => {
    setTipo(e.target.value)
  }
  const mudaNome = (e) => {
    setNome(e.target.value)
  }
  const mudaNivel = (e) => {
    setNivel(e.target.value);
  }
  const mudaDano = (e) => {
    setDano(e.target.value);
  }
  const mudaAtaque = (e) => {
    setAtaque(e.target.value);
  }
  const mudaDefesa = (e) => {
    setDefesa(e.target.value);
  }
  const mudaRaridade = (e) => {
    setRaridade(e.target.value);
  }

  const limitaEntrada1Caracter = (e) => {
    if (e.target.value > 1) {
      e.target.value = e.target.value.slice(0, 1)
    }
  }
  const limitaEntrada4Caracter = (e) => {
    if (e.target.value > 4) {
      e.target.value = e.target.value.slice(0, 4)
    }
  }

  let tiposDisponiveis = criatura ? Object.keys(dadosDasCriaturas[criatura]) : [];

  let criaturaEscolhida = tipo !== '' ? dadosDasCriaturas[criatura][tipo].criatura : 'Criatura';

  let tipoEscolhido = tipo !== '' ? dadosDasCriaturas[criatura][tipo].tipo : 'Tipo';

  return (
    <div>
      <Background />
      <Header />
      {/* <CartasHome exibeFrom={exibeFrom} setExibeForm={setExibeForm} /> */}
      <div>
        <h2>Monte sua Creature</h2>
        <p>Defina todas as características da criatura para gerar sua carta</p>
        <div>
          <div>
            <form>
              <div>
                <label htmlFor="criatura">Criatura:</label>
                <select name="criatura" value={criatura} id="criatura" onChange={mudaCriatura} required>
                  <option value="" disabled>Escolha</option>
                  <option value="mago">Mago</option>
                  <option value="goblin">Goblin</option>
                  <option value="dragao">Dragão</option>
                  <option value="mortovivo">Morto-Vivo</option>
                  <option value="marinha">Marinha</option>
                </select>
              </div>
              <div>
                <label htmlFor="tipo">Tipo:</label>
                <select name="tipo" id="tipo" value={tipo} onChange={mudaTipo} required>
                  <option value="" disabled>Selecione</option>
                  {tiposDisponiveis.map((tipo) => (
                    <option key={tipo} value={tipo}>{dadosDasCriaturas[criatura][tipo].tipo}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="nome">Nome da Carta:</label>
                <input type="text" id='nome' maxLength={20} onChange={mudaNome} required />
              </div>
              <div>
                <span>Raridade:</span>
                <input type="radio" name="raridade" id="comum" value='carta-comum' checked={raridade === 'carta-comum'} onChange={mudaRaridade} />
                <label htmlFor="comum">Comum</label>
                <input type="radio" name="raridade" id="epico" value='carta-rara' checked={raridade === 'carta-rara'} onChange={mudaRaridade} />
                <label htmlFor="rara">Épica</label>
              </div>
              <div>
                <label htmlFor="nivel">Nível:</label>
                <input type="number" id='nivel' placeholder='Máx.: 9' max={9} maxLength={1} onChange={mudaNivel} onInput={limitaEntrada1Caracter} required />
              </div>
              <div>
                <label htmlFor="dano">Quantidade de Dano:</label>
                <input type="number" id='dano' placeholder='Máx.: 9' max={10} onChange={mudaDano} onInput={limitaEntrada1Caracter} required />
              </div>
              <div>
                <label htmlFor="ataque">Pontos de Ataque:</label>
                <input type="number" id='ataque' placeholder='Máx.: 9999' max={9999} onChange={mudaAtaque} onInput={limitaEntrada4Caracter} required />
              </div>
              <div>
                <label htmlFor="defesa">Pontos de Defesa:</label>
                <input type="number" id='defesa' placeholder='Máx.: 9999' max={9999} onChange={mudaDefesa} onInput={limitaEntrada4Caracter} required />
              </div>
              <button type="submit">Criar Carta</button>
            </form>
          </div>
          <div>
            <LayoutCartas
              criatura={criaturaEscolhida}
              tipo={tipoEscolhido}
              nome={nome}
              nivel={nivel}
              dano={dano}
              ataque={ataque}
              defesa={defesa}
              img={fundo}
              raridade={raridade}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
