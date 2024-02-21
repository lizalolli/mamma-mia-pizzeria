import React, { useContext, useState } from 'react'
import { PizzaContext } from '../context/PizzaProvider';

const Cart = () => {

  const { cart, CapitalizeString } = useContext(PizzaContext);

  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
    console.log(setCounter)
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : prevCounter));
      console.log(setCounter)
    }
  };

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
              <h3 className='pizzaCartTitle mx-3'>Pizza {CapitalizeString(pizza.name)}</h3>
            </div>
            <div className="quantity-controls d-flex align-items-center">
              <button className='pizzaBtnQuantity pizzaBtnIncrease' onClick={() => decrementCounter()}>-</button>
              <span className='quantityContainer'>{pizza.count}</span>
              <button className='pizzaBtnQuantity pizzaBtnDecrease' onClick={() => incrementCounter()}>+</button>
              <h3 className='pizzaCartPrice mx-3'>${pizza.price * pizza.count}</h3>
            </div>
            {/* {pizza.count > 1 && `${pizza.count}`} ${pizza.price * pizza.count} */}
          </div>
        ))}
        <div className="cartTotal d-flex justify-content-between mx-5 mt-5">
          <h2>Total:</h2>
          <h2>$</h2>
        </div>
      </div>
    </>
  )
}

export default Cart