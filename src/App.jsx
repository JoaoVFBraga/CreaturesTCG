import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import CartasHome from './components/CartasHome'
import Header from './components/Header'
import LayoutCartas from './components/LayoutCartas'
import ConfirmaAdicionar from './components/ConfirmaAdicionar'
import MontagemCarta from './components/MontagemCarta'
import FundoPreto from './components/FundoPreto'

function App() {

  const [exibeFrom, setExibeForm] = useState(false);
  const [exibeConfirmaAdicionar, setExibeConfirmaAdicionar] = useState(false);
  const [escureceFundo, setEscureceFundo] = useState(false);
  const [exibeCartaAnimada, setExibeCartaAnimada] = useState(false);

  return (
    <div>
      <Background />
      {escureceFundo ? <FundoPreto setEscureceFundo={setEscureceFundo} setExibeConfirmaAdicionar={setExibeConfirmaAdicionar} setExibeCartaAnimada={setExibeCartaAnimada} exibeCartaAnimada={exibeCartaAnimada} /> : null}
      <Header />
      {/* <CartasHome exibeFrom={exibeFrom} setExibeForm={setExibeForm} /> */}
      <MontagemCarta escureceFundo={escureceFundo} setEscureceFundo={setEscureceFundo} exibeConfirmaAdicionar={exibeConfirmaAdicionar} setExibeConfirmaAdicionar={setExibeConfirmaAdicionar} setExibeCartaAnimada={setExibeCartaAnimada} exibeCartaAnimada={exibeCartaAnimada} />
    </div>
  )
}

export default App
