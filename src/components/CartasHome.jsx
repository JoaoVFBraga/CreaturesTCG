import styles from './CartasHome.module.css'
import LayoutCartas from '../components/LayoutCartas'
import { useState } from "react"

export default function CartasHome(props) {

  return (
    <div>
      {props.exibeIntro ?
        <div>
          <div className={styles.cartasHome}>
            <LayoutCartas
              nome="Goblin Gigante"
              nivel="6"
              img="/criaturas/goblin-gigante.png"
              criatura="Goblin"
              tipo="Natureza"
              dano="4"
              ataque="2000"
              defesa="800"
              raridade="carta-comum"
              classeHome='cartaHome' />
            <LayoutCartas
              nome="Mago das Chamas"
              nivel="9"
              img="/criaturas/mago-fogo.png"
              criatura="Mago"
              tipo="Fogo"
              dano="8"
              ataque="2200"
              defesa="1900"
              raridade="carta-rara"
              classeHome='cartaHome' />
            <LayoutCartas
              nome="Esqueleto Frágil"
              nivel="1"
              img="/criaturas/esqueleto.png"
              criatura="Morto-Vivo"
              tipo="Trevas"
              dano="1"
              ataque="500"
              defesa="500"
              raridade="carta-comum"
              classeHome='cartaHome' />
          </div>
          <div className={styles.introducao}>
            <h2>Crie as cartas mais poderosas</h2>
            <p>Com Creatures TCG, você pode criar suas cartas, desafiar seus amigos e ser o campeão dos jogos</p>
            <button onClick={() => {
              props.setExibeIntro(state => !state);
              props.setExibeForm(state => !state);
            }}>Começe a criar</button>
          </div>
        </div>
        : null}
    </div>

  )
}