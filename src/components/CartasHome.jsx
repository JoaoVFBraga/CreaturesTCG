import "./CartasHome.css"
import LayoutCartas from '../components/LayoutCartas'

export default function CartasHome() {
  return (
    <div className='cartas-home'>
      <LayoutCartas
        nome="Goblin Gigante"
        nivel="6"
        img="/criaturas/goblin-gigante.png"
        criatura="Goblin"
        tipo="Natureza"
        dano="4"
        ataque="2000"
        defesa="800"
        raridade="carta-comum" />
      <LayoutCartas
        nome="Mago das Chamas"
        nivel="9"
        img="/criaturas/mago-fogo.png"
        criatura="Mago"
        tipo="Fogo"
        dano="8"
        ataque="2200"
        defesa="1900"
        raridade="carta-rara" />
      <LayoutCartas
        nome="Esqueleto Frágil"
        nivel="1"
        img="/criaturas/esqueleto.png"
        criatura="Esqueleto"
        tipo="Trevas"
        dano="1"
        ataque="500"
        defesa="500"
        raridade="carta-comum" />
    </div>
  )
}