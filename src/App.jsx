import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PizzaProvider from './context/PizzaProvider'
import MyNavbar from './components/MyNavbar'
import Home from './views/Home';
import Details from './views/Details'
import Cart from './views/Cart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PizzaProvider>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/pizza/:id' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </PizzaProvider>
  )
}

export default App
