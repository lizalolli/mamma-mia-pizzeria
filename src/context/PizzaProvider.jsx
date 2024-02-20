import React, { createContext, useState, useEffect } from "react"
import pizzasJson from '../assets/pizzas.json'

export const PizzaContext = createContext();

export default function PizzaProvider({children}) {

    const [pizzas, setPizzas] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([]);


    const CapitalizeString = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const addToCart = (pizza) => {
        const uniqueKey = `${pizza.id}-${cart.length}`;
        const existingProduct = cart.find(item => item.id === pizza.id);

        // setCart([...cart, { ...pizza, key: uniqueKey }])

        alert('pizza añadida!')

        if (existingProduct) {
            // Si ya existe, incrementar el contador
            const updatedCart = cart.map(item =>
              item.id === pizza.id
                ? { ...item, count: item.count + 1 }
                : item
            );

            setCart(updatedCart);

          } else {
            // Si no existe, añadir el producto con contador a 1
            setCart([...cart, { ...pizza, count: 1, key: uniqueKey }]);
          }
    }

    useEffect(() => {
        setPizzas(pizzasJson);
        setIsLoading(false);
    },[])
  
    return (
        <PizzaContext.Provider value={{ pizzas , setPizzas, isLoading, setIsLoading, CapitalizeString, cart, setCart, addToCart }}>
            {children}
        </PizzaContext.Provider>
    )
}

