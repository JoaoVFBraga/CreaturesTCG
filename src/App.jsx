import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import CartasHome from './components/CartasHome'
import Header from './components/Header'
import MontagemCarta from './components/MontagemCarta'
import FundoPreto from './components/FundoPreto'
import MinhaColecao from './components/MinhaColecao'

function App() {

  const [exibeIntro, setExibeIntro] = useState(true)
  const [exibeForm, setExibeForm] = useState(false);
  const [exibeColecao, setExibeColecao] = useState(false);
  const [exibeConfirmaAdicionar, setExibeConfirmaAdicionar] = useState(false);
  const [escureceFundo, setEscureceFundo] = useState(false);
  const [exibeCartaAnimada, setExibeCartaAnimada] = useState(false);
  const [exibeCartaEscolhida, setExibeCartaEscolhida] = useState(false);

  return (
    <div>
      <Background />
      {escureceFundo ? <FundoPreto setEscureceFundo={setEscureceFundo} setExibeConfirmaAdicionar={setExibeConfirmaAdicionar} setExibeCartaAnimada={setExibeCartaAnimada} exibeCartaAnimada={exibeCartaAnimada} setExibeCartaEscolhida={setExibeCartaEscolhida} /> : null}
      <Header setExibeColecao={setExibeColecao} setExibeForm={setExibeForm} setExibeIntro={setExibeIntro} />
      <CartasHome exibeForm={exibeForm} setExibeForm={setExibeForm} setExibeIntro={setExibeIntro} exibeIntro={exibeIntro} />
      {exibeForm ?
        <MontagemCarta escureceFundo={escureceFundo} setEscureceFundo={setEscureceFundo} exibeConfirmaAdicionar={exibeConfirmaAdicionar} setExibeConfirmaAdicionar={setExibeConfirmaAdicionar} setExibeCartaAnimada={setExibeCartaAnimada} exibeCartaAnimada={exibeCartaAnimada} /> : null
      }
      {exibeColecao ?
        <MinhaColecao setEscureceFundo={setEscureceFundo} escureceFundo={escureceFundo} setExibeCartaEscolhida={setExibeCartaEscolhida} exibeCartaEscolhida={exibeCartaEscolhida} /> : null
      }

    </div>
  )
}

export default App
