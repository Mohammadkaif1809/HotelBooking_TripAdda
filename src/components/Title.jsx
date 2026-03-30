import React from 'react'

const Title = ({title, subTitle, align, font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align==="left" && "md:items-start md:text-left"}`}>
      <h1 className={`text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight drop-shadow-md ${font || "font-playfair"}`}>
        {title}
      </h1>
      <p className='text-sm md:text-base text-gray-400 mt-3 max-w-2xl leading-relaxed'>
        {subTitle}
      </p>
    </div>
  )
}

export default Title