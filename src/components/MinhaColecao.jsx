import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import LayoutCartas from './LayoutCartas';
import './MinhaColecao.css'
import { useState, useRef, useEffect } from 'react';

export default function MinhaColecao(props) {

  const [render, setRender] = useState(false);
  const [exibeConfirmaExcluir, setExibeConfirmaExcluir] = useState(false);
  const [exibeBaralho, setExibeBaralho] = useState(false);
  const [pesquisa, setPesquisa] = useState('');

  const cartasSalvas = localStorage.getItem('cartas-salvas')
  const cartasRenderizadas = cartasSalvas ? JSON.parse(cartasSalvas) : [];
  const dadosRef = useRef(null);
  const timerExcluir = useRef(null);

  const confereTamanho = cartasRenderizadas.length < 2 ? true : false;

  const cartasFiltradas = cartasRenderizadas.filter((carta) => {
    return carta.nome.toLowerCase().includes(pesquisa.toLowerCase())
  })

  const atualizaPesquisa = (e) => {
    setPesquisa(e.target.value);
  }
  const removeCarta = () => {
    const novasCartas = cartasRenderizadas.filter((carta) => {
      return carta.id !== dadosRef.current.id
    })
    localStorage.setItem('cartas-salvas', JSON.stringify(novasCartas));
    setRender(true);
    timerExcluir.current = setTimeout(() => {
      props.setExibeCartaEscolhida(false);
      props.setEscureceFundo(false);
      setRender(false);
    }, 1400)
  }

  useEffect(() => {
    setExibeConfirmaExcluir(false);
    clearTimeout(timerExcluir.current);
    setRender(false);
    setExibeBaralho(false);
  }, [props.escureceFundo])

  const exibirCarta = (obj) => {
    dadosRef.current = obj;
    props.setExibeCartaEscolhida(true);
    props.setEscureceFundo(true);
  }

  const mudaConfirmaExcluir = () => {
    setExibeConfirmaExcluir(true);
  }
  const fechaCartaEscolhida = () => {
    props.setExibeCartaEscolhida(false);
    props.setEscureceFundo(false);
    setExibeConfirmaExcluir(false);
  }
  const fechaBaralho = () => {
    props.setEscureceFundo(false);
    setExibeBaralho(false);
  }
  const mostraBaralho = () => {
    setTimeout(() => {
      setExibeBaralho(true);
    }, 1)
    props.setEscureceFundo(true);

  }

  return (
    <div className='minha-colecao-container'>
      <h2>Minha Coleção</h2>
      <p>Busque, visualize e remova suas cartas</p>
      <div className='cartas-filtradas-container'>
        <div className='filtragem-container'>
          <div className='input-pesquisar'>
            <input type="text" value={pesquisa} onChange={atualizaPesquisa} />
            <img src="/icones/icons8-search-50.png" alt="" />
          </div>
          <button className='btn-com-img' onClick={mostraBaralho}>Modo baralho <img src="/icones/icons8-eye-48.png" /></button>
        </div>
        <div className='grid-cartas'>
          {cartasFiltradas.length > 0 ? cartasFiltradas.map((obj) => {
            return (
              <LayoutCartas
                classGrid='carta-grid'
                nome={obj.nome}
                nivel={obj.nivel}
                criatura={obj.criatura}
                tipo={obj.tipo}
                img={obj.img}
                dano={obj.dano}
                ataque={obj.ataque}
                defesa={obj.defesa}
                raridade={obj.raridade}
                key={obj.id}
                onClick={() => exibirCarta(obj)}
              />
            )
          }) : (<p>Não foi possível localizar nenhuma carta. Você pode criar mais em "Criar Cartas".</p>)}
        </div>
      </div>
      {props.exibeCartaEscolhida ?
        <div className={`carta-escolhida ${render ? 'animacao-exclusao' : null}`}>
          <LayoutCartas
            nome={dadosRef.current.nome}
            nivel={dadosRef.current.nivel}
            criatura={dadosRef.current.criatura}
            tipo={dadosRef.current.tipo}
            img={dadosRef.current.img}
            dano={dadosRef.current.dano}
            ataque={dadosRef.current.ataque}
            defesa={dadosRef.current.defesa}
            raridade={dadosRef.current.raridade}
          />
          {!render && (
            !exibeConfirmaExcluir ? (
              <div className='btn-container'>
                <button className='btn-voltar' onClick={fechaCartaEscolhida}>Voltar</button>
                <button className='btn-excluir' onClick={mudaConfirmaExcluir}>Excluir Carta</button>
              </div>
            ) : (
              <div className='btn-container-confirma'>
                <p>Deseja excluir a carta?</p>
                <div>
                  <button className='btn-voltar' onClick={fechaCartaEscolhida}>Cancelar</button>
                  <button className='btn-excluir' onClick={removeCarta}>Excluir</button>
                </div>
              </div>
            )
          )}
        </div> : null
      }
      {exibeBaralho &&
        <div className='container-baralho'>
          {confereTamanho ?
            (
              <p className='texto-aviso'>Crie pelo menos 2 cartas para exibir em modo baralho</p>
            ) :
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              effect={'cards'}
              grabCursor={true}
              navigation={true}
              modules={[EffectCards, Navigation]}
              className="mySwiper"
            >
              {cartasRenderizadas.map((obj) => {
                return (
                  <SwiperSlide key={obj.id} className='swiper-slide-baralho'>
                    <LayoutCartas
                      criatura={obj.criatura}
                      tipo={obj.tipo}
                      nome={obj.nome}
                      nivel={obj.nivel}
                      dano={obj.dano}
                      ataque={obj.ataque}
                      defesa={obj.defesa}
                      img={obj.img}
                      raridade={obj.raridade} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          }
          <button onClick={fechaBaralho}>Voltar</button>
        </div>
      }
    </div>
  )
}