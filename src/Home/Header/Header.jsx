import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from "framer-motion"
import { products } from "../Nav/DataName"
import './Header.css'
import firstImg from './image/CFMOTO-X6-EPS_blue 1.svg'
import secImg from './image/jet_ski_PNG90 1.svg'
import thirdImg from './image/boat_PNG36 1.svg'
import fourtImg from './image/rmvector551 1.svg'
import fifthImg from './image/2018-Maverick-X3-X-rc-TURBO-R-Carbon-Black-and-Octane-Blue_3-4-front4072 1.svg'
import sixtImg from './image/images 1.svg'

export default function header() {
  return (
    <div>
      <Container>
        <Row className='justify-content-start'>
          <Col xs={10}>
            <motion.div id='search-main-box'
              initial={{
                x: -100,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              transition={{
                delay: 0.7
              }}
            >

              {
                products.map((val) => {
                  return (
                    <button id='search-box'>
                      <h4 id="search">{val.search}</h4>
                    </button>
                  )
                })
              }
            </motion.div>
          </Col>

          <Col xs={12}>
            <div id='inp-box'>
              <input type="text" name="" id="mark" placeholder='Введите марку ' />
              <button id='search-btn'>искать</button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={4}>
            <div id='head-box'>

              <div id='title-box'>
                <h3 id='model-name'>Квадроциклы</h3>
                <p id='model-info'>
                  Двигатель 649 см³ <br />
                  Длинная база <br />
                  Резина 26″ J level
                </p>
                <p id='about'>Подробее ➪</p>
              </div>
              <img src={firstImg} id="firstImg" alt="" />
            </div>
          </Col>
          <Col xs={4}>
            <div id='head-box'>

              <div id='title-box'>
                <h3 id='model-name'>Гидроциклы</h3>
                <p id='model-info'>
                  Двигатель 649 см³ <br />
                  Длинная база <br />
                  Резина 26″ J level
                </p>
                <p id='about'>Подробее ➪</p>
              </div>
              <img src={secImg} id="firstImg" alt="" />
            </div>
          </Col>

          <Col xs={4}>
            <div id='head-box'>

              <div id='title-box'>
                <h3 id='model-name'>Катера</h3>
                <p id='model-info'>
                  Двигатель 649 см³ <br />
                  Длинная база <br />
                  Резина 26″ J level
                </p>
                <p id='about'>Подробее ➪</p>
              </div>
              <img src={thirdImg} id="thirdImg" alt="" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <div id='head-box'>

              <div id='title-box'>
                <h3 id='model-name'>Снегоходы</h3>
                <p id='model-info'>
                  Двигатель 649 см³ <br />
                  Длинная база <br />
                  Резина 26″ J level
                </p>
                <p id='about'>Подробее ➪</p>
              </div>
              <img src={fourtImg} id="fourtImg" alt="" />
            </div>
          </Col>

          <Col xs={4}>
            <div id='head-box'>

              <div id='title-box'>
                <h3 id='model-name'>Вездеходы</h3>
                <p id='model-info'>
                  Двигатель 649 см³ <br />
                  Длинная база <br />
                  Резина 26″ J level
                </p>
                <p id='about'>Подробее ➪</p>
              </div>
              <img src={fifthImg} id="fourtImg" alt="" />
            </div>
          </Col>

          <Col xs={4}>
            <div id='head-box'>

              <div id='title-box'>
                <h3 id='model-name'>Двигатели</h3>
                <p id='model-info'>
                  Двигатель 649 см³ <br />
                  Длинная база <br />
                  Резина 26″ J level
                </p>
                <p id='about'>Подробее ➪</p>
              </div>
              <img src={sixtImg} id="fourtImg" alt="" />
            </div>
          </Col>
        </Row>

      </Container>



    </div>
  )
}
