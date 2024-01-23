import React from 'react'

type ButtonProps = {
    title: string
    size?:string
    color?:string
    rounded?:string
    hover?:string
    paddingBtn?:string
    text?:string
}

const Button = ({title,size,color,rounded, hover, paddingBtn,text}: ButtonProps) => {
  return (
    <button className={`border-4 border-solid flex justify-center  items-center border-white padding-container ${size} ${color} ${rounded} ${paddingBtn}`}>
            <h1 className={`uppercase text-3xl transition duration-500 ease-in-out ${hover} font-bold ${text} `}>{title}</h1>

    </button>
  )
}

export default Button