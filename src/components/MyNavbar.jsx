import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import logo from '../assets/logo2.png'
import cartLogo from '../assets/cartLogo.png'
import Cart from '../views/Cart'
import { PizzaContext } from '../context/PizzaProvider'

const MyNavbar = () => {

    const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive')

    const { cart } = useContext(PizzaContext);
    console.log(cart)

    return (
        <Navbar className='w-100'>
            <Container className='container-fluid'>
                <div className="logoContainer d-flex align-items-center">
                    <Navbar.Brand href='/'><img src={logo} className='logo' alt='' /></Navbar.Brand>
                    <h4 className='m-0'>Mamma Mia!</h4>
                </div>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end position-relative">
                    {cart.length > 0 ? <span className='cartCount position-absolute d-flex align-items-center justify-content-center'>{cart.length}</span> : <span>no</span>}
                    <NavLink to='/' className={`baseLink ${setActiveClass}`}>Home</NavLink>
                    <NavLink to='/cart' className={`baseLink ${setActiveClass}`}><img src={cartLogo} height='40' /></NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar