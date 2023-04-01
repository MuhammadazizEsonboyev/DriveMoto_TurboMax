import NavbarPage from './Nav/NavbarPage'
import Header from './Header/Header'
// import FooterPage from './Footer/Footer' 
import Section1 from './Section/Section1'
import Section2 from './Section/Section2'
// import Cart from './Section/Cards/Cart'
import Bfooter from '../About/Bfooter/Bfooter'

export default function AppOne({handleClick}) {

  return (
    <>
    <NavbarPage />
<<<<<<< HEAD
    <Header/>
    <Section1 handleClick = {handleClick}/>
    <Section2 handleClick = {handleClick}/>
    <FooterPage/>
    <Bfooter/>
=======
    <Bfooter/>
    <Section1 handleClick = {handleClick}/>
    <Section2 handleClick = {handleClick}/>
    <Header/>
    {/* <FooterPage/> */}
>>>>>>> eb8e19515ce86f949f7d3b4c21e8d80193a9dec3
    </>
  )
}
