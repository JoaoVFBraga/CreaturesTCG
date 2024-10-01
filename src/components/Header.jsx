import "./Header.css"

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <h1 className='titulo'><a href="#">Creatures TCG</a></h1>
        <button className='btn-colecao'>
          <span>Minha coleção</span>
          <img src="/icones/icons8-box-48.png" alt="" />
        </button>
      </div>
    </header>
  )
}