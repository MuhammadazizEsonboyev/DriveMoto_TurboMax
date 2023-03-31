import React from 'react'
import './Cards.css'
const card = require('./image/VectorCards.png')
const likee = require('./image/VectorLike.png')

const Cards = ({ item, handleClick }) => {



  return (
    <>
      <div className='cards'>
        <img src={likee} alt='' className='cardsLikee' />
        <img src={item?.item?.img} alt='' className='cardsImg' />
        <p className='cardsText'>{item?.item?.title}</p>
        <h4 className='CardsPrice'>{item?.item?.price} ₽ </h4>
        <button onClick={() => handleClick(item?.item)} className='btnCard'>
          <img src={card} alt='' />
        </button>
      </div>
    </>
  )
}

export default Cards
