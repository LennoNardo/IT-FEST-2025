import React, { useEffect } from 'react'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import { MobileLegendImage, CrvideoImage, PosterImage, FotografiImage, WebImage, Penjurian, Logo } from '../../assets/images/layout'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import '../../components/style.css'
import { Helmet } from 'react-helmet'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Competition = () => {

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
        <meta name="description" content="Kompetisi di IT FESTIVAL 2024" />
        <meta name="keywords" content="Kompetisi IT FESTIVAL 2024" />
        <title>Kompetisi</title>
        <link rel="icon" href={Logo} />
      </Helmet>
      <div className="flex flex-col sm:px-20 sm:flex-row-reverse items-center justify-center sm:justify-around min-h-screen">
        <img src={Penjurian} alt="" className='w-full sm:w-2/5' />
        <div className="text-center sm:text-left ">
          <p className='zaptron text-5xl animate-pulse text-gray-300'>Kompetisi</p>
          <p className='comfortaa mt-2 text-gray-400 text-xs sm:text-base px-4 sm:px-0'>Waktunya untuk menunjukkan kemampuanmu pada lomba bergengsi di IT FESTIVAL {currentYear}</p>
        </div>
      </div>
      <p data-aos="fade-up" data-aos-duration="1000" className='w-52 m-auto border py-1 rounded-lg text-white text-center comfortaa text-lg mb-5 sm:mb-16'>Timeline Kompetisi</p>
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
                15 Agustus - 29 September {currentYear}
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
                Technical Meeting
              </h3>
              <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                27 - 28 September {currentYear}
              </time>
              {/* <p className="text-xs sm:text-lg font-normal text-gray-200 dark:text-gray-400">
                Technical Meeting dilakukan secara online melalui Zoom Meeting
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
                Turnamen dan Penjurian
              </h3>
              <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                29 September - 6 Oktober {currentYear}
              </time>
              {/* <p className="text-xs sm:text-lg font-normal text-gray-200 dark:text-gray-400">
                Penjurian, penyisihan dan perlombaan dilakukan secara online yang di koordinir oleh panitia IT FESTIVAL
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
                Pengumuman Pemenang
              </h3>
              <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                10 Oktober {currentYear}
              </time>
              {/* <p className="text-xs sm:text-lg font-normal text-gray-200 dark:text-gray-400">
                Pemenang akan diumumkan melalui instagram IT FESTIVAL dan pada penutupan acara IT FESTIVAL
              </p> */}
            </div>
          </li>
        </ol>

      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="px-8 pb-10 -mb-1">
        <p className='w-52 text-center m-auto rounded-lg py-1 text-white comfortaa border -mb-3 mt-5 text-lg sm:mb-16'>Daftar Kompetisi</p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper mt-8 flex">
          <SwiperSlide className="flex items-center mx-20">
            <div className="bg-gray-600 rounded-xl p-3">
              <div className="border-b-2 border-gray-400 pb-2">
                <img src={MobileLegendImage} alt="" />
              </div>
              <div className="sm:text-center mt-4">
                <p className='comfortaa text-md text-white text-center'>Mobile Legends</p>
                <div className="flex justify-between mt-2">
                  <a href="https://bit.ly/PendaftaranLombaMobileLegendITFestival2024" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800'>Daftar</a>
                  <a href="https://bit.ly/GBLomba_MobileLegends" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800'>Guide Book</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="flex items-center mx-20">
            <div className="bg-gray-600 rounded-xl p-3">
              <div className="border-b-2 border-gray-400 pb-2">
                <img src={CrvideoImage} alt="" />
              </div>
              <div className="sm:text-center mt-4">
                <p className='comfortaa text-md text-white text-center'>Creative Video</p>
                <div className="flex justify-between mt-2">
                  <a href="#" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800'>Close</a>
                  <a href="https://drive.google.com/file/d/1zVsQkIwFxAN0gn--ujv5LUeGeeI5tA7k/view?usp=sharing" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800'>Guide Book</a>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide className="flex items-center mx-20">
            <div className="bg-gray-600 rounded-xl p-3 ">
              <div className="border-b-2 border-gray-400 pb-2">
                <img src={PosterImage} alt="" />
              </div>
              <div className="sm:text-center mt-4">
                <p className='comfortaa text-md text-white text-center'>Poster Design</p>
                <div className="flex justify-between mt-2">
                  <a href="https://bit.ly/PendaftaranLombaDesignPosterITFestival2024" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800'>Daftar</a>
                  <a href="https://bit.ly/GBLomba_PosterDesign" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800'>Guide Book</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center mx-20">
            <div className="bg-gray-600 rounded-xl p-3">
              <div className="border-b-2 border-gray-400 pb-2">
                <img src={WebImage} className='' alt="" />
              </div>
              <div className="sm:text-center mt-4">
                <p className='comfortaa text-md text-white text-center'>Web Design</p>
                <div className="flex justify-between mt-2">
                  <a href="https://bit.ly/PendaftaranLombaWebDesignITFestival2024" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800'>Daftar</a>
                  <a href="https://bit.ly/GD_LombaWebDesign" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800'>Guide Book</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center mx-20 mr-100">
            <div className="bg-gray-600 rounded-xl p-3 ">
              <div className="border-b-2 border-gray-400 pb-2">
                <img src={FotografiImage} alt="" />
              </div>
              <div className="sm:text-center mt-4">
                <p className='comfortaa text-md text-white text-center'>Photography</p>
                <div className="flex justify-between mt-2">
                  <a href="https://bit.ly/PendaftaranLombaPhotographyITFestival2024" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800'>Daftar</a>
                  <a href="https://bit.ly/GD_LombaPhotography" target="_blank" rel='noreferrer' className='py-1 px-6 comfortaa sm:py-2 sm:px-12 transition duration-200 hover:bg-gray-500 text-sm rounded-lg text-gray-200 bg-gray-800'>Guide Book</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center mx-20">
            <div className="bg-600 rounded-xl p-3"></div>
          </SwiperSlide>
          <FontAwesomeIcon className="text-white animate-pulse text-4xl absolute bottom-20 sm:bottom-28 sm:left-36" icon={faAnglesLeft} />
          <FontAwesomeIcon className="text-white animate-pulse text-4xl absolute bottom-20 right-7 sm:bottom-28 sm:right-36" icon={faAnglesRight}/>
        </Swiper>

      </div>
    </div>
  )
}

export default Competition