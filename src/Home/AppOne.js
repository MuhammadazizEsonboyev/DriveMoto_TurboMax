import NavbarPage from './Nav/NavbarPage'
import Header from './Header/Header'
import FooterPage from './Footer/Footer'
import Section1 from './Section/Section1'
import Section2 from './Section/Section2'
// import Cart from './Section/Cards/Cart'
import Bfooter from '../About/Bfooter/Bfooter'

export default function AppOne({cart, setCart, handleChange, handleClick}) {

  return (
    <>
    <NavbarPage />
    <Header/>
    <Section1 handleClick = {handleClick}/>
    <Section2 handleClick = {handleClick}/>
    <FooterPage/>
    <Bfooter/>
    </>
  )
}
