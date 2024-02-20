import React, { useContext } from 'react'
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaProvider';
import AddToCartButton from './AddToCartButton';

export const Gallery = () => {

    const { pizzas, isLoading, CapitalizeString, addToCart, cart } = useContext(PizzaContext);

    const navigate = useNavigate();

    const goToDetails = (id) => navigate(`/pizza/${id}`);

    return (
        <>
            {isLoading ? (
                <Spinner className='mt-5 spinner-grow text-danger' />
            ) : (
                <>
                    <Row xs={1} sm={2} md={3} className="g-4 p-4">
                        {pizzas?.map((pizza) => (
                            <Col key={pizza.id} className='p-3'>
                                <Card>
                                    <Card.Img src={pizza.img} />
                                    <div className='infoPizzaContainer'>
                                        <h2 className='pizzaTitle mt-3 mx-3 pb-3 fw-bold'>{CapitalizeString(pizza.name)}</h2>
                                        <div className='pizzaIngredients m-3 mt-4'>
                                            <h4 className='text-start fw-bold'>Ingredientes:</h4>
                                            <ul className='text-start'>
                                                {pizza.ingredients.map((ingredient) =>
                                                    <li key={ingredient}>{ingredient}</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    <h2 className='pizzaPrice my-3 py-3 mx-3 fw-bold'>${pizza.price}</h2>
                                    <div className="pizzaButtons mt-2 mb-4">
                                        <button
                                            onClick={() => goToDetails(pizza.id)}
                                            className='btn-pizza btn-details py-3 px-3 me-3'
                                        >
                                            Ver más
                                        </button>
                                        {/* función de flecha para evitar que se ejecute si no se cliquea el botón */}
                                        <AddToCartButton pizza={pizza} />
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </>
    )
}

export default Gallery