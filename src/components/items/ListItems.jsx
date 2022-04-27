import { useEffect, useState } from "react";
import Items from "./Items";

const shoes = [
    {
        name: "nike af1", 
        id: 1 , 
        precio:22.000
    },

    {
        name: "nike jordanIV",
        id: 2,
        precio:34.000
    },

    {
        name: "adidas super start",
        id: 3,
        precio: 10.000
    },
]; 

const ListItems = () => {

   const [shoesList , setShoesList] = useState([]);

    useEffect(
        ()=>{ 
            const shoesPromise = new Promise((resolve, reject) =>{
                const rand = Math.random();

                setTimeout(() => {
                    if (rand > 0.5) {
                    resolve(shoes);
                } else {
                    reject("ocurrio un error");
                }
             }, 5000);

            });

            shoesPromise
            .then(result => {
                setShoesList(result);
            })
            .catch(err => {
                console.log("Error:", err);
            });

        }, []
    )


    
  return shoesList.map((product) => (
    <Items key={product.id} producto={product.precio} nombre={product.name} />
  )
    
  )
}

export default ListItems
