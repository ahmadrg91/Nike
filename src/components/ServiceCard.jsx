import React from 'react'

const ServiceCard = ({ imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='flex items-center justify-center bg-coral-red rounded-full h-11 w-11'>
            <img src={imgURL} width={24} height={24}/>
        </div>
        <h3 className='text-3xl font-bold mt-5 font-palanquin leading-normal'>{label}</h3>
        <p className='text-slate-gray mt-3 text-lg leading-normal font-montserrat break-words'>{subtext}</p>
    </div>
  )
}

export default ServiceCard;