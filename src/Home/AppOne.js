import React, { useState } from 'react'
import NavbarPage from './Nav/NavbarPage'
import Header from './Header/Header'
import FooterPage from './Footer/Footer'
import Section1 from './Section/Section1'
import Section2 from './Section/Section2'
import Cart from './Section/Cards/Cart'
import Bfooter from '../About/Bfooter/Bfooter'

export default function AppOne() {
  const [cart, setCart] = useState([])

  const handleClick = (item) => {
    if(cart.indexOf(item) !== -1) return alert("Cart is added");
    setCart([...cart, item])
  // console.log(cart);
  // console.log(item);
  }

const handleChange = (item, d) => {
  const indx = cart.indexOf(item)
  console.log(indx);
  const arr = cart;
  arr[indx].amount += d
  console.log( arr[indx]);
  if(arr[indx].amount === 0) arr[indx].amount = 1;
setCart([...arr])
}

  return (
    <>
    <NavbarPage />
    <Header/>
    <Bfooter/>
    <Section1 handleClick = {handleClick}/>
    <Section2 handleClick = {handleClick}/>
    <FooterPage/>
    <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    </>
  )
}
