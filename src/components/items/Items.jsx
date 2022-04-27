const Items = (props) => {

    const {producto , nombre} = props

  return (
    <li>{`Nombre: ${nombre} Precio: ${producto}`}</li>
  )
}

export default Items