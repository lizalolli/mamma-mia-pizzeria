import React, { useContext } from 'react'
import { PizzaContext } from '../context/PizzaProvider';

const Cart = () => {

  const { cart, CapitalizeString } = useContext(PizzaContext);

  return (
    <>
      <h3 className='my-5 text-start ms-5'>Detalles del pedido</h3>
      <div className='my-5'>
        {cart.map((pizza) => (
          <div key={pizza.key} className='cartList text-start d-flex align-items-center justify-content-between my-2 mx-5'>
            <div className="pizzaImgTitle d-flex align-items-center">
              <img
                src={pizza.img} alt=""
                className='pizzaCartImg'
              />
              <h3 className='pizzaCartTitle mx-3'>{CapitalizeString(pizza.name)}</h3>
            </div>
            {pizza.count > 1 && `x${pizza.count}`} - ${pizza.price * pizza.count}
          </div>
        ))}
        <div className="cartTotal d-flex justify-content-between mx-5">
          <h2>Total:</h2>
          <h2>suma de todo</h2>
        </div>
      </div>
    </>
  )
}

export default Cart