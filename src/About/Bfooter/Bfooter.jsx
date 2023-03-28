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
      <Container>
        <Row className='justify-content-center'>
          <Col>
            <h2 className='hbirbex'>С этим товаром покупают</h2>
            <ul className='listb'>
              <li className='list_itemb'>запчасти</li>
              <li className='list_itemb'>моторы</li>
              <li className='list_itemb'>шины </li>
              <li className='list_itemb'>электроника</li>
              <li className='list_itemb'>инструменты</li>
              <li className='list_itemb'>аксессуары </li>
            </ul>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col xs={3}>
            <Card style={{ width: '18rem', textAlign: 'center' }}>
            <i class="fa-regular fa-heart"></i>
              <Card.Img variant="top" src={kalonka} alt='' className='kalonb' />
              <Card.Body>
                <Card.Title className='bcardtex'>BRP Audio-портативна система</Card.Title>
                <Card.Text className='bsamlte'> нет в наличии </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">Сообщить о поступлении</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={3}>
            <Card style={{ width: '18rem', textAlign: 'center' }}>

              <i class="fa-regular fa-heart"></i>
              <Card.Img variant="top" src={sensor} alt='' className='kalonb' />
              <Card.Body>
                <Card.Title className='plusb'>Garmin Echomap Plus<br></br> 62cv</Card.Title>
                <Card.Text className='rubab'>45 800 ₽</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={3}>
            <Card style={{ width: '18rem', textAlign: 'center' }}>

              <i class="fa-regular fa-heart"></i>
              <Card.Img variant="top" src={purjina} alt='' className='purjina' />
              <Card.Body>
                <Card.Title className='rafab'>RF D.E.S.S.TM Key</Card.Title>
                <Card.Text className='netnalichb'> нет в наличии </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">Сообщить о поступлении</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={3}>
            <Card style={{ width: '18rem', textAlign: 'center' }}>

              <i class="fa-regular fa-heart"></i>
              <Card.Img variant="top" src={dresb} alt='' className='dresb' />
              <Card.Body>
                <Card.Title className='mmkiyimb'>Мужской костюм <br></br>3мм</Card.Title>
                <Card.Text className='yetirub'>7 000 ₽</Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

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