import './ConfirmaAdicionar.css'
import LayoutCartas from "./LayoutCartas"

export default function ConfirmaAdicionar(props) {

  const cancelaCartaCriada = () => props.setExibeConfirmaAdicionar(false)

  return (
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
        <button className='botao-cancelar' onClick={cancelaCartaCriada}>Cancelar</button>
        <button className='botao-salvar'>Salvar</button>
      </div>
    </div>
  )
}