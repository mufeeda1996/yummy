import React from 'react'

const Card = ({img,title,btn_text}) => {
  return (
    <div>
      <div className='card bg-base-100 w-96 shadow-sm'>
        <figure className='px-10 pt-10'>
          <img
            src={img}
            alt='Shoes'
            className='rounded-xl'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-stone-900 font-bold text-3xl'>{title}</h2>
          
          <div className='card-actions'>
            <button className='btn-circle bg-orange-600 text-white px-6 py-4 flex items-center gap-2 hover:bg-orange-700 transition'>{btn_text}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
