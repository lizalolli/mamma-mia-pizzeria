import React, { useContext } from 'react'
import { PizzaContext } from '../context/PizzaProvider'

const AddToCartButton = ({pizza}) => {

    const { pizzas, addToCart } = useContext(PizzaContext);

    return (
        <>
            <button 
                onClick={() => addToCart(pizza)} 
                className='btn-pizza btn-cart py-3 px-3'
            >Añadir al carro</button>
        </>
    )
}

export default AddToCartButton