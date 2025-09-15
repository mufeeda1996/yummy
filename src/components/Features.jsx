import React from 'react'
import { Handshake } from 'lucide-react';
import { UserStar } from 'lucide-react';
import { Link } from 'react-router-dom';
const Features = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-6 m-6">
      <div className='card bg-base-100 w-150 shadow-sm bg-orange-100 shadow-md'>
        <figure className='px-10 pt-10'>
        <Handshake className='text-orange-500 w-[100px] h-[100px]'/>
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-stone-900 font-bold text-3xl'>Become a partner</h2>
          <p>Reach more customers & achieve remarkable growth. Write your next chapter with yummy.</p>
          <div className='card-actions'>
           <Link to='/admin'><button className='btn-circle bg-orange-600 text-white px-6 py-4 flex items-center gap-2 hover:bg-orange-700 transition'>Find out more</button></Link> 
          </div>
        </div>
      </div>
      <div className='card bg-base-100 w-150 shadow-sm bg-orange-100 shadow-md'>
        <figure className='px-10 pt-10'>
        <UserStar className="text-orange-500 w-[100px] h-[100px]" />

        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-stone-900 font-bold text-3xl'>Grow in your career</h2>
          <p>Join an amazing bunch of people who work behind the scenes to make talabat happen.</p>
          <div className='card-actions'>
          <Link to='/admin/career'> <button className='btn-circle bg-orange-600 text-white px-6 py-4 flex items-center gap-2 hover:bg-orange-700 transition'>See job oppurtunities</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
