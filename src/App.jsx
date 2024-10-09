import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background'
import CartasHome from './components/CartasHome'
import Header from './components/Header'
import LayoutCartas from './components/LayoutCartas'
import ConfirmaAdicionar from './components/ConfirmaAdicionar'
import MontagemCarta from './components/MontagemCarta'

function App() {

  const [exibeFrom, setExibeForm] = useState(false);

  return (
    <div>
      <Background />
      <Header />
      {/* <CartasHome exibeFrom={exibeFrom} setExibeForm={setExibeForm} /> */}
      <MontagemCarta />
    </div>
  )
}

export default App
