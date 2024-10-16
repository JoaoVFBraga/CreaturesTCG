import "./FundoPreto.css"

export default function FundoPreto(props) {

  const retiraFundoEscuro = () => {
    props.setEscureceFundo(false);
    props.setExibeConfirmaAdicionar(false);
    props.setExibeCartaAnimada(false);
    props.setExibeCartaEscolhida(false);
  }

  return (
    <div className="container-fundo" onClick={retiraFundoEscuro}></div>
  )
}