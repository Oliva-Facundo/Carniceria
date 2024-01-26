import React from 'react'

const Card = ({ rute, text, bgImg }) => {
  return (
    <>
      <a href={rute} className={`max-w-[25rem] h-[10rem] flex items-center justify-center rounded-2xl bg-black bg-[url(${bgImg})] bg-center bg-cover`}>
        <span className='text-white text-center text-2xl font-bold'>{text}</span>
      </a>
    </>
  )
}

export default Card