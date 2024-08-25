import React from 'react'

const Button = ({ label, icon, bg, text, border}) => {
  return (
    <button className={`flex gap-2 items-center justify-center px-7 py-4 rounded-full text-lg leading-none font-montserrat border ${bg || 'bg-coral-red'} ${text || 'text-white'} ${border || 'border-corel-red'}`}>
        {label}
        {icon && <img src={icon}/>}
    </button>
  )
}

export default Button;