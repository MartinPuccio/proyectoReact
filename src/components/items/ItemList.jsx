
import { useState, useEffect } from "react";
import Item from "./Item";

const ItemList=()=>{
    const[data, setData] = useState([]);

    useEffect(() => {
      getData();
    }, [])
    
    const getData = () => {

        const URL = "https://fakestoreapi.com/products";

        fetch(URL)
        .then((Response) => Response.json())
        .then((data) => {
            setData(data)
        })
    }

    return <div>
        {data.map(item =><Item key={item.id} item={item}/>)}
    </div>
};

export default ItemList;


