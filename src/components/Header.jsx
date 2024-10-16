import "./Header.css"

export default function Header(props) {

  const exibeCartasDaColecao = () => {
    props.setExibeColecao(true);
    props.setExibeForm(false);
    props.setExibeIntro(false);
  }
  const exibeFormDeCriacao = () => {
    props.setExibeColecao(false);
    props.setExibeForm(true);
    props.setExibeIntro(false);
  }
  const exibeIntro = () => {
    props.setExibeColecao(false);
    props.setExibeForm(false);
    props.setExibeIntro(true);
  }

  return (
    <header>
      <div className='header-container'>
        <h1 className='titulo' onClick={exibeIntro}><a href="#">Creatures TCG</a></h1>
        <div className="div-btn-header">
          <button className='btn-com-img' onClick={exibeFormDeCriacao}>
            <span>Criar Cartas</span>
            <img src="/icones/icons8-card-game-66.png" alt="" />
          </button>
          <button className='btn-com-img' onClick={exibeCartasDaColecao}>
            <span>Minha coleção</span>
            <img src="/icones/icons8-box-48.png" alt="" />
          </button>
        </div>
      </div>
    </header>
  )
}