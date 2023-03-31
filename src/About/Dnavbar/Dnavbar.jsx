import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Dnavbar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import qayq from '../img/qayiq.png'

const Dnavbar = () => {
  return (
    <div >

      <div id="advertisement-box">
        <Container>
          <Row  className='justify-content-between'>
            <div id='otabobo'>
              <Col xs={5}>
                <p className='glavnya'>Главная
                  Гидроциклы
                  Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</p>
                <button className='sale'>SALE</button>
                <img className='imgfs' src={qayq} alt="" />
                <div className="narhlar">
                  <h2 className='price mb-4'>1 200 475 ₽</h2>
                  <h2 className='price2'>1 100 475 ₽</h2>
                  <p className='nashli'>Нашли дешевле? Снизим цену!</p>
                </div>
              </Col>
              <Col  xs={6}>
                <h2 className='gidrosikl'>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
                <p className='kod'>Код товара:   366666-2 </p>
                <div className="obshe">
                  <FavoriteBorderIcon className='like'/>
                  <BarChartIcon className='like'/>
                  <div className="starts">
                    <  StarOutlineIcon className='start' />
                    < StarOutlineIcon className='start' />
                    < StarOutlineIcon className='start' />
                    < StarOutlineIcon className='start' />
                    < StarOutlineIcon className='start' />
                  </div>
                </div                                                                                                                                                                                                                                                                                                                                                                                                                                    >
                <div className="nachnali">
                  <h4 className='xarakter'>Характеристики</h4>
                  <h4 className='Наличие'>Наличие в магазине</h4>
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
            </div>
          </Row>
        </Container>
      </div>
    </div >
  )
}



export default Dnavbar