import React from 'react'
import HotItemCar from "./HotItemCar.js"
import "../styles/HotAccessorie.css"

const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover, home,homeCover,lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
        <div>
              <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="Cover"/>
        </div>
     
     {/* --------2nd */}
     <div>
       
         {music && music.map((item,index)=>(
         <HotItemCar key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
         ))}

          {smartDevice  && smartDevice.map((item,index)=>(
         <HotItemCar key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
         ))}

          {home  && home.map((item,index)=>(
         <HotItemCar key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
         ))}


        {lifestyle  && lifestyle.map((item,index)=>(
         <HotItemCar key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
         ))}

        {mobileAccessories  && mobileAccessories.map((item,index)=>(
         <HotItemCar key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
         ))}
     </div>


    </div>
  )
}

export default HotAccessories