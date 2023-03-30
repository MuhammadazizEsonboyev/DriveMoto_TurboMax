import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Cart.css'
const Cart = ({ cart }) => {

    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let count = 0;
        cart.map((item) => (
            count += item.amount * item.price
        ))
        setPrice(count);
    }

    useEffect(() => {
        handlePrice()
    }, [])

    return (
        <>
          <Container>
            <Row>
                <Col xs={12}>
                {
                cart?.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} alt="ppp" />
                            <p>{item.title}</p>
                        </div>

                        <div>
                            Price: <span>{item.price}</span>
                        </div>
                    </div>
                ))}
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span>Rs - {price}</span>
            </div>
                </Col>
            </Row>
          </Container>
        </>
    )
}

export default Cart