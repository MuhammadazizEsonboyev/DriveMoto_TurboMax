import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from "framer-motion"
import {products} from "../Nav/DataName"
import './Header.css'


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
            <input type="text"  name="" id="mark" placeholder='Введите марку ' />
              <button id='search-btn'>искать</button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          
        </Row>
      </Container>
    </div>
  )
}
