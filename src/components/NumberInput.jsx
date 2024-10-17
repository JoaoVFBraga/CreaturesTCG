export default function NumberInput(props) {

  return (
    <div className='item-form'>
      <label htmlFor={props.htmlFor}>{props.textoLabel}</label>
      <input type="number" value={props.value} id={props.id} className={props.className} placeholder={props.placeholder}
        onChange={props.onChange}
        onInput={props.onInput} required />
    </div>
  )
}