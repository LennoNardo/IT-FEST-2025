import React from 'react'
import { Error } from '../assets/images/layout'

const NotFound = () => {
  return (
    <div className='bg-gradient-to-tl from-gray-900 via-gray-900 to-gray-700 min-h-screen items-center flex justify-center'>
        <div className="">
            <p className='text-center text-gray-400 text-3xl comfortaa'>Error | 404</p>
            <img src={Error} alt="" className='sm:w-96'/>
            <p className='text-white comfortaa text-center'>Kayaknya kamu nyasar deh!</p>
        </div>
    </div>
  )
}

export default NotFound