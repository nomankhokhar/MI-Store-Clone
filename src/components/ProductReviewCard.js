import React from 'react'
import "../styles/ProductReviewCard.css"

const ProductReviewCard = ({image,index,review,name,price}) => {
  return (
    <div className='ProductReviewsCard'>
    <img src={image} alt={`${index}  reviews`}/>
    <h5>{review}</h5>
    <span>{name}</span>
   <b> {price}</b>
    </div>
  )
}

export default ProductReviewCard