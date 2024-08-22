import React from 'react'

const Button = ({ label, icon}) => {
  return (
    <button className='flex gap-4 items-center justify-center bg-coral-red px-7 py-4 rounded-full text-white text-lg leading-none font-montserrat border-corel-red'>
        {label}
        <img src={icon}/>
    </button>
  )
}

export default Button;