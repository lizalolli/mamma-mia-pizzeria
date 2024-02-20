import React, { useEffect, useState, useContext } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaProvider';
import AddToCartButton from '../components/AddToCartButton';


const Details = () => {

    const { pizzas, isLoading, CapitalizeString } = useContext(PizzaContext);

    const { id } = useParams();

    if (!pizzas) {
        return <p>Pizza not found</p>;
    }

    if (pizzas) {
        const pizza = pizzas.find((pizza) => pizza.id === id);

        return (
            <>
                {isLoading ? (
                    <Spinner className='mt-5 spinner-grow text-danger' />
                ) : (
                    <div className="detailsContainer my-5 p-5">
                        <div className="pizzaSpecifications d-flex text-start">
                            <img className="pizzaDetailsImg" src={pizza.img} alt={`imagen pizza ${pizza.name}`} />
                            <div className="infoPizza p-3">
                                <h2 className='pizzaTitle mt-3 mx-3 pb-3 fw-bold'>{CapitalizeString(pizza.name)}</h2>
                                <p className='mx-3'>{pizza.desc}</p>
                                <div className='pizzaIngredients mx-3'>
                                    <h4 className='text-start fw-bold'>Ingredientes:</h4>

                                    <ul>
                                        {pizza.ingredients.map((ingredient) =>
                                            <li key={ingredient}>{ingredient}</li>
                                        )}
                                    </ul>
                                </div>
                                <div className="priceAndButton mx-3 mb-4">
                                    <h3>{pizza.price}</h3>
                                    <AddToCartButton pizza={pizza} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    } else {
        <p>Lo sentimos, esta pizza no está disponible u-u</p>
    }
}

export default Details