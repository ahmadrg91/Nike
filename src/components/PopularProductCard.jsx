import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price, ratings}) => {
  return (
    <div className='flex flex-col w-full gap-3'>
      <img src={imgURL} alt='shoe card' width={282} height={282} className='object-contain'/>
      <div className='flex gap-3 mt-6 text-2xl text-slate-gray'>
        <img src={star} width={24} height={24} className='inline-block'/> ({ratings})
      </div>
      <p className='font-semibold text-2xl font-palanquin'>{name}</p>
      <p className='text-coral-red text-2xl font-montserrat font-semibold'>{price}</p>
    </div>
  )
}

export default PopularProductCard;