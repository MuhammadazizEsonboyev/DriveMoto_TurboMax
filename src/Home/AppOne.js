import React, { useState } from 'react'
import NavbarPage from './Nav/NavbarPage'
import Header from './Header/Header'
import FooterPage from './Footer/Footer'
import Section1 from './Section/Section1'
import Section2 from './Section/Section2'
import Cart from './Section/Cards/Cart'

export default function AppOne() {
  const [cart, setCart] = useState([])

  const handleClick = (item) =>{
    setCart([...cart, item])
  }
  return (
    <>
    <NavbarPage/>
    <Header/>
    <Section1 handleClick = {handleClick}/>
    <Section2/>
    <FooterPage/>
    <Cart cart={cart}/>
    </>
  )
}
