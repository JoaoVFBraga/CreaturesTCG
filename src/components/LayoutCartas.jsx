import "./LayoutCartas.css"

export default function LayoutCartas(props) {
  return (
    <div className={`layout-carta ${props.raridade} ${props.classeHome} ${props.classeConfirma} ${props.classAnimacao}`}>
      <div className='header-carta'>
        <h4>{props.nome}</h4>
        <span><img src="/estrela/Starball_Red.svg.png" alt="" /> x{props.nivel}</span>
      </div>
      <div className='imagem-carta'>
        <img src={props.img} alt="" />
      </div>
      <div className='tipo-carta'>{props.criatura} | {props.tipo}</div>
      <div className='dano-carta'><span className='span-negrito'>Dano: </span>{props.dano}</div>
      <div className='pontos-carta'>
        <span><span className='span-negrito'>Ataque: </span>{props.ataque}</span>
        <span><span className='span-negrito'>Defesa: </span>{props.defesa}</span>
      </div>
    </div>
  )
}