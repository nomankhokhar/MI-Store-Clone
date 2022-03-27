import React from 'react'
import Offer from "./Offer.js"
import "../styles/Offers.css"

const Offers = ({offer}) => {
  return (
    <div className='offersSection'>
    {offer.map((item,index)=>(
   <Offer key={item.image} src={item.image} link={item.url} index={index} />
    ))}    
    </div>
  )
}

export default Offers