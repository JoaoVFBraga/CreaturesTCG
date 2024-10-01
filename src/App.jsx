import './App.css'
import Background from './components/Background'
import CartasHome from './components/CartasHome'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Background />
      <Header />
      <CartasHome />
      <div className='introducao'>
        <h2>Crie as cartas mais poderosas</h2>
        <p>Com Creatures TCG, você pode criar suas cartas, desafiar seus amigos e ser o campeão dos jogos</p>
        <button>Começe a criar</button>
      </div>
    </div>
  )
}

export default App
