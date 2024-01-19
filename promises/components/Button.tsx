import React from 'react'

type ButtonProps = {
    title: string
    size?:string
}

const Button = ({title,size}: ButtonProps) => {
  return (
    <button className={`border-4 border-solid flex justify-center items-center border-white padding-container ${size} bg-[#D1AF70] btnPadding`}>
            <h1 className='uppercase text-3xl font-bold text-white '>{title}</h1>

    </button>
  )
}

export default Button