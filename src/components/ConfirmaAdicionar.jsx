import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ConfirmaAdicionar.css'
import LayoutCartas from "./LayoutCartas"

export default function ConfirmaAdicionar(props) {

  let cartasSalvas = JSON.parse(localStorage.getItem('cartas-salvas')) || [];

  const cancelaCartaCriada = () => {
    props.setExibeConfirmaAdicionar(false);
    props.setEscureceFundo(false);
  }
  const salvaCarta = () => {
    cartasSalvas.push({
      criatura: props.criatura,
      tipo: props.tipo,
      nome: props.nome,
      nivel: props.nivel,
      dano: props.dano,
      ataque: props.ataque,
      defesa: props.defesa,
      img: props.img,
      raridade: props.raridade,
      id: uuidv4(),
    });
    localStorage.setItem('cartas-salvas', JSON.stringify(cartasSalvas));
  }

  return (
    <div>
      <div className='container-confirma'>
        <p>Deseja salvar a carta criada na sua coleção?</p>
        <LayoutCartas
          classeConfirma="carta-confirma-adicionar"
          criatura={props.criatura}
          tipo={props.tipo}
          nome={props.nome}
          nivel={props.nivel}
          dano={props.dano}
          ataque={props.ataque}
          defesa={props.defesa}
          img={props.img}
          raridade={props.raridade}
        />
        <div className='botoes-confirma-adicionar'>
          <button className='botao-cancelar' onClick={
            cancelaCartaCriada}>Cancelar</button>
          <button className='botao-salvar'
            onClick={() => {
              salvaCarta();
              props.controlaAnimacao();
            }}>Salvar</button>
        </div>
      </div>
    </div>
  )
}