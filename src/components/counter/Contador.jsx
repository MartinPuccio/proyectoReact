import { useState } from "react"

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
    <div> contador </div>
    <button onClick={restarContador}> - </button>
    <strong> {contador} </strong>
    <button onClick={aumentarContador}> + </button>
    </>
  )
}

export default Contador