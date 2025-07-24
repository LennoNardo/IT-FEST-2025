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
    <div className={y > 100 ? 'px-7 md:px-16 py-3 md:py-4 fixed top-0 flex z-50 text-white justify-between w-full transition-all duration-300' : 'px-7 md:px-16 py-3 md:py-4 fixed top-0 flex bg-transparent z-50 text-white justify-between w-full transition-all duration-300'} 
         style={{
           background: y > 100 ? 'linear-gradient(135deg, rgba(22, 33, 61, 0.95) 0%, rgba(34, 34, 34, 0.95) 100%)' : 'transparent',
           backdropFilter: y > 100 ? 'blur(10px)' : 'none',
           borderBottom: y > 100 ? '2px solid #e94560' : 'none'
         }}>
        <div className="brand flex items-center">
          <img src={Logo} className='w-9 md:w-14' alt="" />
          <p className='valorant-font text-md md:text-lg ml-2 text-glow-pink'>IT FESTIVAL</p>
        </div>
        <div className="flex items-center w-50 transition ease-in-out duration-300">
          <ul className={mobile ? 'hidden md:flex ' : 'w-48 block absolute right-2 top-12 w-100 p-4 rounded-lg valorant-card'} onClick={() => setMobile(true)}>
              <Link className='relative group md:mr-9' to="/">
                <li className="text-xs hover:text-pink-400 transition duration-300 md:text-md no-underline text-center mb-2 py-2 w-100 px-4 md:px-2 valorant-font relative">
                  HOME
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
              <Link className='relative group md:mr-9' to="/kompetisi">
                <li className="text-xs hover:text-pink-400 transition duration-300 md:text-md no-underline text-center mb-2 py-2 px-4 md:px-2 valorant-font relative">
                  KOMPETISI
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
              <Link className='relative group md:mr-9' to="/pelatihan">
                <li className="text-xs hover:text-pink-400 transition duration-300 md:text-md no-underline text-center mb-2 py-2 w-100 px-4 md:px-2 valorant-font relative">
                  PELATIHAN
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
              <Link className='relative group md:mr-9' to="/seminar">
                <li className="text-xs hover:text-pink-400 transition duration-300 md:text-md no-underline text-center mb-2 py-2 w-100 px-4 md:px-2 valorant-font relative">
                  SEMINAR
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
          </ul>
          <button className='md:hidden text-2xl hover:text-pink-400 transition-colors duration-300' onClick={() => setMobile(!mobile)}>
            {mobile ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faXmark}/>}
          </button>
        </div>
    </div>
  )
}

export default Navbar