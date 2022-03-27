import React from 'react'
import "../styles/HotItemCard.css"

const HotItemCar = ({image,index,name,price}) => {
  return (
    <div className='HotItemCard'>
         <img src={image} alt={`${index} products`} />
         <p>{name}</p>
         <span>{price}</span>
    </div>
  )
}

export default HotItemCar