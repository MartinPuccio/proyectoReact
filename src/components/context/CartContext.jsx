import React, {createContext, useContext, useState} from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = (props) => {

    const [cart , setCart] = useState([])
    //buscar si ya existe el producto en el carrito
    const isInCart = (id) => cart.find(prod => prod.id === id)
    // agregar item al carrito 
    const addToCart = (producto, cantidad) => {
        
        const newCart = [...cart]
        
        const productoEnCart = isInCart(producto.id)
        
        if (productoEnCart) {
            const numeroDeMiProdcutoRepetido = newCart.findIndex(prod => prod.id === productoEnCart.id )
            newCart[numeroDeMiProdcutoRepetido].quantity += cantidad 
            setCart(newCart)
            return
        }
        producto.quantity = cantidad 
        setCart([...newCart, producto])
    }
    
    // eliminar del carrito
    const deleteFromCart =(producto)=>{
        const newCart = [...cart]
        const productoEnCart = isInCart(producto.id)
        if (!productoEnCart) {
            return;   
        }
        
        const deleteProduct = newCart.filter(product => product.id !== producto.id)
        setCart(deleteProduct)
    }
    
    const deleteCart = () => {
        setCart([])
    }
    console.log(cart);
    
    return <CartContext.Provider value={{
            cart,    
            isInCart,
            addToCart,
            deleteFromCart,
            deleteCart,
    }}>{props.children}</CartContext.Provider>
}

export default CartContextProvider