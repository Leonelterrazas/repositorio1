import React from "react";

const Card = (props) => {

    const { img, description, price, inventory } = props;
    return (
        <div className='p-8 grid grid-cols-1'>
        <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300'>
          <img src={img} className='w-50 h-50 object-cover -mt-20 shadow-xl rounded-full'/>
          <p className='text-xl'>{description}</p>
          <span className='text-gray-400'>{price}</span>
          <p className='text-gray-600'>{inventory}</p>
        </div>
      </div>
    )
}

export default Card