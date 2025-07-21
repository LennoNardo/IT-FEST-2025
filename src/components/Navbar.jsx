import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Logo, Pelatihan } from '../assets/images/layout'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {

  // Scroll Condition
  const [y, setY] = useState()

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY))
    return () => {
      window.removeEventListener('scroll', () => setY(window.scrollY))
    }
  }, [])

  // Mobile Responsive Nav
  const [mobile, setMobile] = useState(true)

  return (
    <div className={y > 100 ? 'px-7 md:px-16 py-3 md:py-4 fixed top-0 flex bg-gray-900 z-50 text-white justify-between w-full' : 'px-7 md:px-16 py-3 md:py-4 fixed top-0 flex bg-transparent z-10 text-white justify-between w-full'}>
        <div className="brand flex items-center">
          <img src={Logo} className='w-9 md:w-14' alt="" />
          <p className='zaptron text-md md:text-lg ml-2'>IT FESTIVAL</p>
        </div>
        <div className="flex items-center w-50 transition ease-in-out duration-300">
          <ul className={mobile ? 'hidden md:flex ' : 'w-40 block absolute right-2 bg-gray-800 top-12 w-100 p-2 rounded-lg comfortaa'} onClick={() => setMobile(true)}>
              <Link className='focus:border-b-2 border-slate-600 focus:transition-all duration-200 focus:-mb-1 md:mr-9' to="/">
                <li className="text-xs hover:text-slate-400 transition duration-200 focus:text-slate-600 md:text-md no-underline text-center mb-2 py-1 w-100 px-4 md:px-1">HOME</li>
              </Link>
              <Link className='focus:border-b-2 border-slate-600 focus:transition-all duration-200 focus:-mb-1 md:mr-9' to="/kompetisi">
                <li className="text-xs hover:text-slate-400 transition duration-200 focus:text-slate-600 md:text-md no-underline text-center mb-2 py-1 px-4 md:px-1">KOMPETISI</li>
              </Link>
              <Link className='focus:border-b-2 border-slate-600 focus:transition-all duration-200 focus:-mb-1 md:mr-9' to="/pelatihan">
                <li className="text-xs hover:text-slate-400 transition duration-200 focus:text-slate-600 md:text-md no-underline text-center mb-2 py-1 w-100 px-4 md:px-1">PELATIHAN</li>
              </Link>
              <Link className='focus:border-b-2 border-slate-600 focus:transition-all duration-200 focus:-mb-1 md:mr-9' to="/seminar">
                <li className="text-xs hover:text-slate-400 transition duration-200 focus:text-slate-600 md:text-md no-underline text-center mb-2 py-1 w-100 px-4 md:px-1">SEMINAR</li>
              </Link>
          </ul>
          <button className='md:hidden text-2xl' onClick={() => setMobile(!mobile)}>{mobile ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faXmark}/>}</button>
        </div>
    </div>
  )
}

export default Navbar