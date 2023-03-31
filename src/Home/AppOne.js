import NavbarPage from './Nav/NavbarPage'
import Header from './Header/Header'
import FooterPage from './Footer/Footer'
import Section1 from './Section/Section1'
import Section2 from './Section/Section2'

export default function AppOne({cart, setCart, handleChange, handleClick}) {

  return (
    <>
    <NavbarPage />
    <Header/>
    <Section1 handleClick = {handleClick}/>
    <Section2 handleClick = {handleClick}/>
    <FooterPage/>
    </>
  )
}
