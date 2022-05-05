import { useState } from "react"
import "./contador.css"

const Contador = (props) => {
const { valorInicial , stock } = props;

   
    const [contador , actContador] = useState(valorInicial);

    const aumentarContador = () => {
        let hayStock = stock - contador;
        if (hayStock > 0) {
            actContador(contador + 1);
        }
        
    }  

   const restarContador = () => {
       if (contador !==0) { 
           actContador (contador - 1)
       }
   }
    

  return (
    <>
    <div className="count">
    <button onClick={restarContador}> - </button>
    <strong> {contador} </strong>
    <button onClick={aumentarContador}> + </button>
    </div>
    </>
  )
}

export default Contador