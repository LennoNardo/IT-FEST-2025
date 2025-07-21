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
            <footer className="p-4 text-white sm:p-10 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-700">
                <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <a href="/" aria-label="Go home" title="It festival" className="inline-flex items-center">
                                <img src={Logo} className='w-6 md:w-12' alt="" />
                                <span className="zaptron mb-2 mt-4 ml-2 text-xl font-semibold tracking-wide text-white">
                                    IT FESTIVAL
                                </span>
                            </a>
                            <div className="mt-6 lg:max-w-sm">
                                <p className="text-sm text-white">
                                    "Build Realization To Educate with Digital Content"
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <p className="zaptron mb-4 mt-5 text-sm font-bold tracking-wide text-white">
                                NAVIGASI
                            </p>
                            <ul className="text-gray-400 mr-1">
                                <Link to='/'><li className='mb-4 hover:underline'>Home</li></Link>
                                <Link to='/kompetisi'><li className='mb-4 hover:underline'>Kompetisi</li></Link>
                                <Link to='/pelatihan'><li className='mb-4 hover:underline'>Pelatihan</li></Link>
                                <Link to='/webinar'><li className='mb-4 hover:underline'>Seminar</li></Link>
                            </ul>

                        </div>
                        <div className='space-y-2 mt-4'>
                            <span className="zaptron mb-4 sm:mt-0 mt-7 text-sm font-bold tracking-wide uppercase text-white">
                                Contact itfest team
                            </span>
                            <div className="flex items-center mt-1 space-x-3">
                                <ul className="text-gray-400 flex justify-evenly">
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank"
                                            href="https://instagram.com/itfestpolsri/"
                                            className="hover:underline "
                                        >
                                            <FontAwesomeIcon icon={faInstagram} className='bg-gradient-to-bl from-pink-500 to-yellow-500 text-white p-2 rounded-md' />
                                        </a>
                                    </li>
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank"
                                            href="https://mail.google.com/mail/?view=cm&source=mailto&to=itfestivalpolsri@gmail.com
                                            " className="hover:underline">
                                            <FontAwesomeIcon icon={faEnvelope} className='bg-red-600 text-white p-2 rounded-md' />
                                        </a>
                                    </li>
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank"
                                            href="http://wa.me/62895631401155" className="hover:underline">
                                            <FontAwesomeIcon icon={faWhatsapp} className='bg-green-500 text-white p-2 rounded-md' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <span className="zaptron mb-4 sm:mt-0 mt-7 text-sm font-bold tracking-wide uppercase text-white">
                                Contact hmj mi
                            </span>
                            <div className='flex items-center mt-1 space-x-3'>
                                <ul className="text-gray-400 flex justify-around">
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank"
                                            href="https://instagram.com/hmjmi_polsri/"
                                            className="hover:underline "
                                        >
                                            <FontAwesomeIcon icon={faInstagram} className='bg-gradient-to-bl from-pink-500 to-yellow-500 text-white p-2 rounded-md' />
                                        </a>
                                    </li>
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank" href="https://mail.google.com/mail/?view=cm&source=mailto&to=hmjmi@polsri.ac.id" className="hover:underline">
                                            <FontAwesomeIcon icon={faEnvelope} className='bg-red-600 text-white p-2 rounded-md' />
                                        </a>
                                    </li>
                                    <li className="sm:mb-4 m-1">
                                        <a target="blank" href="http://wa.me/62895383530904" className="hover:underline">
                                            <FontAwesomeIcon icon={faWhatsapp} className='bg-green-500 text-white p-2 rounded-md' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            © IT FEST {currentYear}. All rights reserved.
                        </p>
                        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                            <img src={Kabinet} alt="Kabinet Logo" className="w-8 md:w-16" />
                            <img src={Logo} alt="IT FEST Logo" className="w-6 md:w-14" />
                            <img src={Hmj} alt="HMJ MI Logo" className='w-6 md:w-12' />
                            <img src={Polsri} alt="POLSRI Logo" className='w-6 md:w-12' />
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer