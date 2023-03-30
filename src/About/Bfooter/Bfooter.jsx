import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "./bfooter.css"
const kalonka = require("../img/kalonkab.png")
const sensor = require("../img/sensorb.png")
const purjina = require("../img/purjina.png")
const dresb = require("../img/dresb.png")

const Bfooter = () => {
  return (
    <>


      <section className='foterb'>
        <Container>
          <Row>
            <Col xs={3}>
              <h5 className='holtib'>Подпишитесь на нашу рассылку<br></br>
                и узнавайте о акция быстрее</h5>
                <input placeholder='Введите ваш e-mail:' type='text' className='footinb'/>
                <button className='butfotb'>Отправить</button>
            </Col>
            <Col xs={3}> 
              <ul className='list_itmftb'>
                <li id='infob'>Информация </li>
                <li className='listftb'>О компании </li>
                <li className='listftb'>Контакты </li>
                <li className='listftb'>Акции </li>
                <li className='listftb'>Магазины</li>
              </ul>
            </Col>
            <Col xs={3}>
                <ul className='lasftbmag'>
                    <li id='mgagash'>Интернет-магазин</li>
                    <li className='mgshopb'>Доставка и самовывоз</li>
                    <li className='mgshopb'>Оплата</li>
                    <li className='mgshopb'>Возврат-обмен</li>
                    <li className='mgshopb'>Новостии</li>
                </ul>
            </Col>
            <Col >
                <div className='iconsfoterb'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>
                </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Bfooter