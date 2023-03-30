import React from 'react'
import './Cards.css'
const card = require('./image/VectorCards.png')
const likee = require('./image/VectorLike.png')

const Cards = ({item, handleClick}) => {
  const { img, title,  price, } = item

  return (
    <>
    <div className="cards">
      <img src={likee} alt="" className='cardsLikee' />
      <img src={img} alt="" className='cardsImg' />
      <p className="cardsText">{title}</p>
      <h4 className="CardsPrice">{price}</h4>
      <button onClick={() => handleClick(item)} className='btnCard'><img src={card} alt="" /></button>
    </div>
    </>
  )
}

export default Cards