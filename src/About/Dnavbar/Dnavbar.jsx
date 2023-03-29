import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Dnavbar.css'
import logo from '../img/logo.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import qayq from '../img/qayiq.png'

const Dnavbar = () => {
  return (
    <div>
      <Container>
        <Row className='justify-content-center mt-3'>
          <Col xs={5}>
            <div id='Navbar-box'>
              <h4 id='nav-market'>Магазины</h4>
              <h4 id='nav-market'>Акции</h4>
              <h4 id='nav-market'>Доставка и оплата</h4>
            </div>
          </Col>
          <Col xs={2}>
            <img src={logo} alt="svg" id='logo' />
          </Col>
          <Col xs={5}>
            <div id='Navbar-box'>
              < LocationOnIcon id='navigation' />
              <h4 id='nav-adress' >Москва,  ул. Науки  25</h4>
              <div id='profile-box'>
                <FavoriteBorderIcon />
                <PersonIcon />
                < ShoppingCartIcon />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <div id='nav-category-box'>
              <div id='category-box'>
                <li id="category-name">Квадроциклы</li>
                <li id="category-name">Катера</li>
                <li id="category-name">Гидроциклы</li>
                <li id="category-name">Лодки</li>
                <li id="category-name">Вездеходы</li>
                <li id="category-name">Снегоходы</li>
                <li id="category-name">Двигатели</li>
                <li id="category-name">Запчасти</li>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

<div id="advertisement-box">
        <Container>
          <Row className='justify-content-between'>
            <Col xs={5}>
              <p className='glavnya'>Главная
                Гидроциклы
                Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</p>
              <button className='sale'>SALE</button>
              <img src={qayq} alt="" />
              <div className="narhlar">
                <h2 className='price mb-4'>1 200 475 ₽</h2>
                <h2 className='price2'>1 100 475 ₽</h2>
                <p className='nashli'>Нашли дешевле? Снизим цену!</p>
              </div>
            </Col>
            <Col xs={6}>
              <h2 className='gidrosikl'>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
              <p className='kod'>Код товара:   366666-2 </p>
              <div className="obshe">
                <FavoriteBorderIcon />
                <BarChartIcon />
                <div className="starts">
                  <  StarOutlineIcon className='start' />
                  < StarOutlineIcon  className='start'/>
                  < StarOutlineIcon  className='start'/>
                  < StarOutlineIcon  className='start'/>
                  < StarOutlineIcon  className='start'/>
                </div>
              </div                                                                                                                                                                                                                                                                                                                                                                                                                                    >
              <div className="nachnali">
                <h4 className='xarakter'>Характеристики</h4>
                <h4  className='Наличие'>Наличие в магазине</h4>
              </div>
              <div className="haraktee">
                <div className="stateName">
                <h6 className='prozod'>Производитель</h6>
                <div className='chiziq'></div>
                <h6 className='prozod'>Количество мест, шт: </h6>
                <div className='chiziq'></div>
                <h6 className='prozod'>Мощность, л.с.</h6>
                <div className='chiziq'></div>
                <h6 className='prozod'>Тип двигателя</h6>
                <div className='chiziq'></div>
                <h6 className='prozod'>Год выпуска</h6>
                <div className='chiziq'></div>
                <h6 className='link'>Показать еще</h6>
                </div>
                <div className="stateAge">
                <h6 className='prozod'>Канада</h6>
                <h6 className='prozod'>3 </h6>
                <h6 className='prozod'>155</h6>
                <h6 className='prozod'>Бензиновый</h6>
                <h6 className='prozod'>  2018</h6>
                </div>
              </div>
<button className='kupit'>купить</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div >
  )
}



export default Dnavbar