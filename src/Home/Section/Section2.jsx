import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from './Cards/Cards'
import CardList from './Cards/CardList'
import './Section2.css'
// import Bfooter from '../../About/Bfooter/Bfooter'
// const motor1 = require("../Footer/img/motor1.png")
// const motor2 = require("../Footer/img/motor2.png")


const Section2 = ({ handleClick }) => {
  return (
    <>
      {/* <Container>
        <Row>
          <Col xs={12} lg={12} className='d-block d-sm-block'>
            <div className="boxBlue">
              <div className="textSaleMoto">
                <h2 className="motoText">CКИДКИ на все запчасти <br /> до 70%</h2>
              </div>

              <div className="imagesMotors">
                <img src={motor1} alt="" id='motor1'/>
                <button className="button_motor">ПОСМОТЕТЬ ВСЕ</button>
                <img src={motor2} alt="" id='motor2' />
              </div>
              
              <div className="trackBtn">
              </div>
            </div>

          </Col>
        </Row>
      </Container> */}


      <Container>
        <Row>
          <Col xs={8}>
            <h2 className="textFooter">С этим товаром покупают</h2>
            <ul className="list_footer">
              <li className="list_item_footer">запчасти</li>
              <li className="list_item_footer">моторы</li>
              <li className="list_item_footer">шины </li>
              <li className="list_item_footer">электроника</li>
              <li className="list_item_footer">инструменты</li>
              <li className="list_item_footer">аксессуары</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className='justify-content-center'>
      {CardList?.map(item => {
        // console.log(item);
        return (
          <>
           
                <Col xs={3}>
                  <Cards item={{item}} key={item.id} handleClick={handleClick} />
                </Col>
              
          </>
        )
      })}
       
        
        
      </Row>
    </Container>

    {/* <Bfooter/> */}
    </>
  )
}

export default Section2