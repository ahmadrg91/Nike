import React from 'react'

const Button = ({ label, icon, bg, text, border, fullWidth}) => {
  return (
    <button className={`flex gap-2 items-center justify-center px-7 py-4 rounded-full text-lg leading-none font-montserrat border ${fullWidth && 'w-full'} ${bg || 'bg-coral-red'} ${text || 'text-white'} ${border || 'border-corel-red'}`}>
        {label}
        {icon && <img src={icon}/>}
    </button>
  )
}

export default Button;