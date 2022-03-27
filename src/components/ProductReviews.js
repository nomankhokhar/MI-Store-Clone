import React from 'react'
import HotItemCar from './HotItemCar'
import ProductReviewCard from "../components/ProductReviewCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='ProductReviews'>
        {ProductReviews.map((item,index)=>(
            <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />
        ))}
    </div>
  )
}

export default ProductReviews