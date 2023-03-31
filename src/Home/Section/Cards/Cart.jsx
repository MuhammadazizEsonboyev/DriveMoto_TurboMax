import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Cart.css'

const Cart = ({cart, setCart, handleChange}) => {
const [price, setPrice] = useState(0);


const handleRemove = (id) => {
    setCart(cart.filter((item)=>item?.id !== id))
    handlePrice()
    //  console.log(cart.filter((item)=>item?.id !== id));
}

const handlePrice = () => {
let count = 0;
cart?.map((item)=>(( count += item.amount * item.price)))
setPrice(count)
}


useEffect(()=> {
    handlePrice()
})

  return (
    <>
<Container>
    <Row className='justify-content-center'>
        <Col xs={8} className='d-none d-lg-block'>
        {  cart?.map((item) => (
<div className="cart_box" key={item?.id}>
    <div className="cart_img">
        <img src={item?.img} alt="aa" />
        <p>{item?.title}</p>
    </div>
<div>
    <button onClick={()=> handleChange(item, 1)} style={{border:"none", borderRadius: "5px", backgroundColor: "wheat"}}>+</button>
    <button style={{border:"none", borderRadius: "5px", backgroundColor: "wheat"}}>{item?.amount}</button>
    <button onClick={()=> handleChange(item, -1)} style={{border:"none", borderRadius: "5px", backgroundColor: "wheat"}}>-</button>
</div>
    <div>
        Price: <span>{item?.price}</span>
    </div>
    <button className="btn_remove" onClick={()=> handleRemove(item?.id)} style={{border:"none", borderRadius: "5px", backgroundColor: "wheat", padding:" 7px"}}>Remove</button>

</div>
    ))}
    <div className="total">
        <span>Total Price of your Cart </span>
        <span>Rs - {price}</span>
        </div>
        </Col>

        
    </Row>
</Container>
 
    </>
  )
}

export default Cart