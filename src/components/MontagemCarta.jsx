import { useEffect, useState } from 'react';
import LayoutCartas from './LayoutCartas';
import ConfirmaAdicionar from './ConfirmaAdicionar';
import NumberInput from './NumberInput';
import './MontagemCarta.css';

export default function MontagemCarta() {

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

  const [erros, setErros] = useState({});
  const [exibeConfirmaAdicionar, setExibeConfirmaAdicionar] = useState(false);

  const [criatura, setCriatura] = useState("");
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState('');
  const [nivel, setNivel] = useState('');
  const [dano, setDano] = useState('');
  const [ataque, setAtaque] = useState('');
  const [defesa, setDefesa] = useState('');
  const [fundo, setFundo] = useState('/background/fundo-carta.jpg');
  const [raridade, setRaridade] = useState('carta-comum');


  const reiniciaAnimacao = () => {
    const reiniciaErros = Object.keys(erros).reduce((acc, chave) => {
      acc[chave] = false;
      return acc;
    }, {});

    setErros(reiniciaErros);
  }
  const verificaFormulario = () => {
    const novosErros = {};
    setTimeout(() => {

      if (!criatura) novosErros.criatura = true;
      if (!tipo) novosErros.tipo = true;
      if (!nome.trim()) novosErros.nome = true;
      if (!nivel) novosErros.nivel = true;
      if (!dano) novosErros.dano = true;
      if (!ataque) novosErros.ataque = true;
      if (!defesa) novosErros.defesa = true;

      setErros(novosErros);

      const existeValorTrue = Object.values(novosErros).some(valor => valor === true);
      setExibeConfirmaAdicionar(!existeValorTrue);
    }, 1)
  }

  const erroCorrigido = (e) => {
    const id = e.target.id;
    setErros({ ...erros, [id]: id.value === '' ? true : false, })
  }

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

  let tiposDisponiveis = criatura ? Object.keys(dadosDasCriaturas[criatura]) : [];

  let criaturaEscolhida = tipo !== '' ? dadosDasCriaturas[criatura][tipo].criatura : 'Criatura';

  let tipoEscolhido = tipo !== '' ? dadosDasCriaturas[criatura][tipo].tipo : 'Tipo';

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

  return (
    <div className='container-montagem'>
      <h2>Monte sua Creature</h2>
      <p>Defina todas as características da criatura para gerar sua carta</p>
      <div className='form-container'>
        <div>
          <form>
            <div className='item-form'>
              <label htmlFor="criatura">Criatura:</label>
              <select name="criatura" value={criatura} id="criatura" className={`${erros.criatura ? 'input-vazio' : ''}`} onChange={(e) => {
                mudaCriatura(e);
                erroCorrigido(e)
              }} required>
                <option value="" disabled>Selecione</option>
                <option value="mago">Mago</option>
                <option value="goblin">Goblin</option>
                <option value="dragao">Dragão</option>
                <option value="mortovivo">Morto-Vivo</option>
                <option value="marinha">Marinha</option>
              </select>
            </div>
            <div className='item-form'>
              <label htmlFor="tipo">Tipo:</label>
              <select name="tipo" id="tipo" className={`${erros.tipo ? 'input-vazio' : ''}`} value={tipo} onChange={(e) => {
                mudaTipo(e);
                erroCorrigido(e)
              }} required>
                <option value="" disabled>Selecione</option>
                {tiposDisponiveis.map((tipo) => (
                  <option key={tipo} value={tipo}>{dadosDasCriaturas[criatura][tipo].tipo}</option>
                ))}
              </select>
            </div>
            <div className='item-form ocupar-linha'>
              <label htmlFor="nome">Nome da Carta:</label>
              <input type="text" id='nome' className={`${erros.nome ? 'input-vazio' : ''}`} maxLength={20} onChange={(e) => {
                mudaNome(e);
                erroCorrigido(e)
              }} required />
            </div>
            <div className='form-raridade item-form ocupar-linha'>
              <span>Raridade:</span>
              <input type="radio" name="raridade" id="comum" value='carta-comum' checked={raridade === 'carta-comum'} onChange={mudaRaridade} />
              <label htmlFor="comum">Comum</label>
              <input type="radio" name="raridade" id="epico" value='carta-rara' checked={raridade === 'carta-rara'} onChange={mudaRaridade} />
              <label htmlFor="epico">Épica</label>
            </div>
            <NumberInput htmlFor={"nivel"} textoLabel="Nível" id={"nivel"} className={erros.nivel ? 'input-vazio' : ''} placeholder={"Máx.: 9"}
              onChange={(e) => {
                mudaNivel(e);
                erroCorrigido(e);
              }}
              onInput={limitaEntrada1Caracter} />
            <NumberInput htmlFor={"dano"} textoLabel="Dano" id={"dano"} className={erros.dano ? 'input-vazio' : ''} placeholder={"Máx.: 9"}
              onChange={(e) => {
                mudaDano(e);
                erroCorrigido(e);
              }}
              onInput={limitaEntrada1Caracter} />
            <NumberInput htmlFor={"ataque"} textoLabel="Pontos de Ataque" id={"ataque"} className={erros.ataque ? 'input-vazio' : ''} placeholder={"Máx.: 9999"}
              onChange={(e) => {
                mudaAtaque(e);
                erroCorrigido(e);
              }}
              onInput={limitaEntrada4Caracter} />
            <NumberInput htmlFor={"defesa"} textoLabel="Pontos de Defesa" id={"defesa"} className={erros.defesa ? 'input-vazio' : ''} placeholder={"Máx.: 9999"}
              onChange={(e) => {
                mudaDefesa(e);
                erroCorrigido(e);
              }}
              onInput={limitaEntrada4Caracter} />
            <button type="button" onClick={() => {
              reiniciaAnimacao();
              verificaFormulario();
            }}>Salvar Carta</button>
          </form>
        </div>
        <div>
          <LayoutCartas
            criatura={criaturaEscolhida}
            tipo={tipoEscolhido}
            nome={nome.trim() === '' ? 'Nome' : nome}
            nivel={nivel === '' ? 0 : nivel}
            dano={dano === '' ? 0 : dano}
            ataque={ataque === '' ? 0 : ataque}
            defesa={defesa === '' ? 0 : defesa}
            img={fundo}
            raridade={raridade}
          />
        </div>
      </div>
      {exibeConfirmaAdicionar ?
        <ConfirmaAdicionar
          criatura={criaturaEscolhida}
          tipo={tipoEscolhido}
          nome={nome.trim() === '' ? 'Nome' : nome}
          nivel={nivel === '' ? 0 : nivel}
          dano={dano === '' ? 0 : dano}
          ataque={ataque === '' ? 0 : ataque}
          defesa={defesa === '' ? 0 : defesa}
          img={fundo}
          raridade={raridade}
          setExibeConfirmaAdicionar={setExibeConfirmaAdicionar}
        />
        : null}
    </div>
  )
}