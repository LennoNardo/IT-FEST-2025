import React from 'react'
import { Logo, Polsri, Hmj, Kabinet } from '../assets/images/layout'
import '../components/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLine, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {

    // Automatically update years
    const currentYear = new Date().getFullYear();

    return (
        <div className=''>
            <footer className="p-4 text-white sm:p-10 relative" style={{background: 'linear-gradient(135deg, #16213d 0%, #222222 100%)'}}>
                <div className="geometric-decoration top-10 right-10" style={{animationDelay: '2s'}}></div>
                <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <a href="/" aria-label="Go home" title="It festival" className="inline-flex items-center">
                                <img src={Logo} className='w-6 md:w-12 glow-pink' alt="" />
                                <span className="valorant-font mb-2 mt-4 ml-2 text-xl font-semibold tracking-wide text-white text-glow-pink">
                                    IT FESTIVAL
                                </span>
                            </a>
                            <div className="mt-6 lg:max-w-sm">
                                <p className="text-sm text-gray-300 comfortaa leading-relaxed">
                                    "Build Realization To Educate with Digital Content"
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <p className="valorant-font mb-4 mt-5 text-sm font-bold tracking-wide text-pink-400">
                                NAVIGASI
                            </p>
                            <ul className="text-gray-300 mr-1">
                                <Link to='/'><li className='mb-4 hover:text-pink-400 transition-colors duration-300 comfortaa'>Home</li></Link>
                                <Link to='/kompetisi'><li className='mb-4 hover:text-pink-400 transition-colors duration-300 comfortaa'>Kompetisi</li></Link>
                                <Link to='/pelatihan'><li className='mb-4 hover:text-pink-400 transition-colors duration-300 comfortaa'>Pelatihan</li></Link>
                                <Link to='/seminar'><li className='mb-4 hover:text-pink-400 transition-colors duration-300 comfortaa'>Seminar</li></Link>
                            </ul>

                        </div>
                        <div className='space-y-2 mt-4'>
                            <span className="valorant-font mb-4 sm:mt-0 mt-7 text-sm font-bold tracking-wide uppercase text-lavender">
                                Contact itfest team
                            </span>
                            <div className="flex items-center mt-1 space-x-3">
                                <ul className="text-gray-300 flex justify-evenly">
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank"
                                            href="https://instagram.com/itfestpolsri/"
                                            className="hover:scale-110 transition-transform duration-300"
                                        >
                                            <FontAwesomeIcon icon={faInstagram} className='bg-gradient-to-bl from-pink-500 to-purple-400 text-white p-2 rounded-md glow-pink' />
                                        </a>
                                    </li>
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank"
                                            href="https://mail.google.com/mail/?view=cm&source=mailto&to=itfestivalpolsri@gmail.com
                                            " className="hover:scale-110 transition-transform duration-300">
                                            <FontAwesomeIcon icon={faEnvelope} className='bg-gradient-to-r from-pink-500 to-red-500 text-white p-2 rounded-md glow-pink' />
                                        </a>
                                    </li>
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank"
                                            href="http://wa.me/62895631401155" className="hover:scale-110 transition-transform duration-300">
                                            <FontAwesomeIcon icon={faWhatsapp} className='bg-gradient-to-r from-green-500 to-emerald-500 text-white p-2 rounded-md glow-lavender' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <span className="valorant-font mb-4 sm:mt-0 mt-7 text-sm font-bold tracking-wide uppercase text-lavender">
                                Contact hmj mi
                            </span>
                            <div className='flex items-center mt-1 space-x-3'>
                                <ul className="text-gray-300 flex justify-around">
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank"
                                            href="https://instagram.com/hmjmi_polsri/"
                                            className="hover:scale-110 transition-transform duration-300"
                                        >
                                            <FontAwesomeIcon icon={faInstagram} className='bg-gradient-to-bl from-pink-500 to-purple-400 text-white p-2 rounded-md glow-pink' />
                                        </a>
                                    </li>
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank" href="https://mail.google.com/mail/?view=cm&source=mailto&to=hmjmi@polsri.ac.id" className="hover:scale-110 transition-transform duration-300">
                                            <FontAwesomeIcon icon={faEnvelope} className='bg-gradient-to-r from-pink-500 to-red-500 text-white p-2 rounded-md glow-pink' />
                                        </a>
                                    </li>
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank" href="http://wa.me/62895383530904" className="hover:scale-110 transition-transform duration-300">
                                            <FontAwesomeIcon icon={faWhatsapp} className='bg-gradient-to-r from-green-500 to-emerald-500 text-white p-2 rounded-md glow-lavender' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                        <p className="text-sm text-gray-400 comfortaa">
                            © IT FEST 2025. All rights reserved.
                        </p>
                        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                            <img src={Kabinet} alt="Kabinet Logo" className="w-8 md:w-16 hover:scale-110 transition-transform duration-300 glow-lavender" />
                            <img src={Logo} alt="IT FEST Logo" className="w-6 md:w-14 hover:scale-110 transition-transform duration-300 glow-pink" />
                            <img src={Hmj} alt="HMJ MI Logo" className='w-6 md:w-12 hover:scale-110 transition-transform duration-300 glow-lavender' />
                            <img src={Polsri} alt="POLSRI Logo" className='w-6 md:w-12 hover:scale-110 transition-transform duration-300 glow-pink' />
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer