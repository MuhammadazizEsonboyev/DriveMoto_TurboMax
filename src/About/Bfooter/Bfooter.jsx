import React from 'react'
import { Accordion,  Col, Container, Row } from 'react-bootstrap'
import "./bfooter.css"


const Bfooter = () => {
  return (
    <>
      <section className='foterb'>
        <Container>
          <Row>
            <Col md={3} xs={12} >
              <h5 className='holtib'>Подпишитесь на нашу рассылку<br></br>
                и узнавайте о акция быстрее</h5>
              <input placeholder='Введите ваш e-mail:' type='text' className='footinb' />
              <button className='butfotb'>Отправить</button>
            </Col>
            <Col md={3}  xs={12}>
              <ul className='list_itmftb'>
                <li id='infob'>Информация </li>
                <li className='listftb'>О компании </li>
                <li className='listftb'>Контакты </li>
                <li className='listftb'>Акции </li>
                <li className='listftb'>Магазины</li>
              </ul>
            </Col>
            <Col md={3} xs={12}>
              <ul className='lasftbmag' >
                <li id='mgagash'>Интернет-магазин</li>
                <li className='mgshopb'>Доставка и самовывоз</li>
                <li className='mgshopb'>Оплата</li>
                <li className='mgshopb'>Возврат-обмен</li>
                <li className='mgshopb'>Новостии</li>
              </ul>
            </Col>

            <Accordion className='brobek' md={3} defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Информация</Accordion.Header>
                <Accordion.Body>
                  <ul className='list_itmftb'>
                    <li id='ifob'>Информация </li>
                    <li className='subexa'>Контакты </li>
                    <li className='subexa'>Акции </li>
                    <li className='subexa'>Магазины</li>
                    <li className='subexa'>О компании </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Интернет-магазин</Accordion.Header>
                <Accordion.Body>
                  <ul className='lasftbmag' >
                    <li id='agash'>Интернет-магазин</li>
                    <li className='suabexa'>Доставка и самовывоз</li>
                    <li className='suabexa'>Оплата</li>
                    <li className='suabexa'>Возврат-обмен</li>
                    <li className='suabexa'>Новостии</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>


            <Col >
              <div className='iconsfoterb'>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Bfooter