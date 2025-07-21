import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AndroidImage, WebTraining, Pelatihan, Logo, AndroidStudio, VSCODE } from '../../assets/images/layout'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import '../../components/style.css'
import { Helmet } from 'react-helmet'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Training = () => {

  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Automatically update years
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-gradient-to-tl from-gray-900 via-gray-900 to-gray-700'>
      <Helmet>
        <meta name="description" content="Pelatihan di IT FESTIVAL 2022" />
        <meta name="keywords" content="Pelatihan IT FESTIVAL 2022" />
        <title>Pelatihan</title>
        <link rel="icon" href={Logo} />
      </Helmet>
      <div className="flex flex-col sm:px-20 sm:flex-row-reverse items-center justify-center sm:justify-around min-h-screen">
        <img src={Pelatihan} alt="" className='w-full sm:w-2/4' />
        <div className="text-center sm:text-left">
          <p className='zaptron text-5xl animate-pulse text-gray-300'>Pelatihan</p>
          <p className='comfortaa text-gray-400 mt-2 text-xs sm:text-base px-5 sm:px-0'>Tingkatkan Skill programming mu dengan membuat real project bersama mentor profesional</p>
        </div>
      </div>

      {/* Timeline Pelatihan */}
      <p data-aos="fade-up" data-aos-duration="1000" className='w-52 m-auto border py-1 rounded-lg text-white text-center comfortaa text-lg mb-5 sm:mb-16'>Timeline Pelatihan</p>
      <div data-aos="fade-up" data-aos-duration="1000" className="flex px-3 sm: mb-24 justify-center">
        <ol className="items-center sm:flex px-1 sm:justify-center">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-6 h-6 bg-gray-700 rounded-full ring-0 ring-gray-300 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-gray-200 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-400 h-0.5 dark:bg-gray-700" />
            </div>
            <div className="mt-3 sm:pr-8 comfortaa">
              <h3 className="sm:text-lg text-md font-semibold text-gray-200 dark:text-white">
                Pembukaan Pendaftaran
              </h3>
              <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                05 Agustus - 08 September {currentYear}
              </time>
              {/* <p className="text-xs sm:text-lg font-normal text-gray-200 dark:text-gray-400">
                Pendaftaran Lomba dilakukan melalui website resmi itfest
              </p> */}
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-6 h-6 bg-gray-700 rounded-full ring-0 ring-gray-300 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-gray-200 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-400 h-0.5 dark:bg-gray-700" />
            </div>
            <div className="mt-3 sm:pr-8 comfortaa">
              <h3 className="text-md sm:text-lg font-semibold text-gray-200 dark:text-white">
                Pelaksanaan Pelatihan
              </h3>
              <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                17 - 20 September {currentYear}
              </time>
              {/* <p className="text-xs sm:text-lg font-normal text-gray-200 dark:text-gray-400">
                Technical Meeting dilakukan secara online melalui Zoom Meeting
              </p> */}
            </div>
          </li>
        </ol>
      </div>

      {/* Daftar Pelatihan */}
      <div data-aos="fade-up" data-aos-duration="1000" className="px-10 pb-10 -mb-1">
        <p className='w-52 text-center m-auto rounded-lg py-1 text-white comfortaa border mb-8 mt-5 text-lg sm:mb-16'>Daftar Pelatihan</p>
        <div className="flex items-center justify-center w-2/5 sm:w-80 m-auto">
          <div className="bg-gray-600 rounded-xl p-3">
            <div className="border-b-2 border-gray-400 pb-2">
              <img src={AndroidImage} alt="" />
            </div>
            <div className="sm:text-center mt-4">
              <p className='comfortaa text-md text-white text-center'>Android</p>
              <div className="flex justify-between mt-2">
                <a href="https://bit.ly/PendaftaranPelatihanAndoridITFestival2024" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800 flex items-center justify-center ml-2'>Daftar</a>
                <a href="https://bit.ly/GBPelatihan_Android" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800 flex items-center justify-center ml-2'>Guide Book</a>
              </div>
            </div>
          </div>
          <div className="bg-gray-600 rounded-xl p-3 ml-6">
            <div className="border-b-2 border-gray-400 pb-2">
              <img src={WebTraining} alt="" />
            </div>
            <div className="sm:text-center mt-4">
              <p className='comfortaa text-md text-white text-center'>Web Design</p>
              <div className="flex justify-between mt-2">
                <a href="https://bit.ly/PendaftaranPelatihanWebITFestival2024" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800 flex items-center justify-center ml-2'>Daftar</a>
                <a href="https://bit.ly/GBPelatihan_WebDesign" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800 flex items-center justify-center ml-2'>Guide Book</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daftar Kelas */}
      <div data-aos="fade-up" data-aos-duration="1000" className="px-10 pb-10 -mb-1">
        <p className='w-52 text-center m-auto rounded-lg py-1 text-white comfortaa border mb-8 mt-5 text-lg sm:mb-16'>Daftar Kelas</p>
        <div className="flex items-center justify-center w-2/5 sm:w-80 m-auto">
          <div className="bg-gray-600 rounded-xl p-3">
            <div className="border-b-2 border-gray-400 pb-2">
              <img src={AndroidStudio} alt="" />
            </div>
            <div className="sm:text-center mt-4">
              <p className='comfortaa text-md text-white text-center'>Kelas Android</p>
              <div className="flex justify-between mt-2">
                <a href="https://bit.ly/PelatihanAndroidKelasA" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800 flex items-center justify-center ml-2'>Kelas A</a>
                <a href="https://bit.ly/PelatihanAndroidKelasB" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800 flex items-center justify-center ml-2'>Kelas B</a>
              </div>
            </div>
          </div>
          <div className="bg-gray-600 rounded-xl p-3 ml-6">
            <div className="border-b-2 border-gray-400 pb-2">
              <img src={VSCODE} alt="" />
            </div>
            <div className="sm:text-center mt-4">
              <p className='comfortaa text-md text-white text-center'>Kelas Web Design</p>
              <div className="flex justify-between mt-2">
                <a href="https://bit.ly/PelatihanWebKelasA" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800 flex items-center justify-center ml-2'>Kelas A</a>
                <a href="https://bit.ly/PelatihanWebKelasB" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800 flex items-center justify-center ml-2'>Kelas B</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Training