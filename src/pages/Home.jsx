import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import '../components/style.css'
import { Maskot, Logo } from '../assets/images/layout'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper'
import data from '../assets/medpartsponsor/layout'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet'

const Home = () => {

    useEffect(() => {
        Aos.init()
        Aos.refresh()

    }, [])


    // Effect for Scrolling Data 
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    // Countdown Timer
    const endCountdown = new Date('October 10, 2024 12:00:00')

    // Automatically update years
    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-gradient-to-br bg-gray-900'>
            <Helmet>
                <meta name="description" content="IT FESTIVAL 2024 Himpunan Mahasiswa Jurusan Manajemen Informatika Politeknik Negeri Sriwijaya" />
                <meta name="keywords" content="IT FESTIVAL 2024" />
                <title>IT FESTIVAL 2024</title>
                <link rel="icon" href={Logo} />
            </Helmet>
            <Hero countdownTimeStamp={endCountdown} />
            <div className="floating">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Maskot Section */}

            <div data-aos="fade-up" data-aos-duration="1000" className="flex sm:flex-row flex-col justify-evenly items-center bg-gray-900">
                <div className="">
                    <p className='comfortaa text-center text-white text-2xl sm:text-5xl'>Introducing,  <span className='zaptron'>Sparco</span> </p>
                    <p className='text-gray-400 text-center sm:text-left mb-2 sm:mb-0 comfortaa text-xs'>Official Mascot IT FESTIVAL {currentYear}</p>
                    <p className='comfortaa text-gray-200 hidden sm:block  w-96'>Robot yang memiliki kemampuan berpikir kreatif, semangat tinggi, pintar berkomunikasi, dan memiliki daya tarik yang luar biasa.</p>
                </div>
                <div className=''>
                    <img src={Maskot} className='sm:w-80 w-48 '  alt="" />
                </div>
            </div>

            {/* End Maskot Section */}

            {/* Timeline Section */}
            <p className='text-center comfortaa text-gray-200 mt-10 sm:mt-20 text-xl sm:text-4xl'><span className='bg-gradient-to-br from-gray-500 via-gray-300 to-gray-200 rounded-lg text-md px-10 sm:px-24 py-1 text-gray-900'>timeline</span></p>
            <div className='min-h-screen flex items-center bg-gray-900'>
                <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div
                            className="border-2-2 absolute border-opacity-20 border-gray-200 h-full border"
                            style={{ left: "50%" }}
                        />
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 text-center text-xs sm:text-xl">Pembukaan Pendaftaran Perlombaan, Seminar dan Pelatihan</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                    05 Agustus {currentYear}
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                            </div>
                            <div className="order-1 bg-gray-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-center text-xs sm:text-xl">Penutupan Pendaftaran Peserta Seminar dan Pelatihan</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                    08 September {currentYear}
                                </p>
                            </div>
                        </div>
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 text-center text-xs sm:text-xl">Pembukaan Acara IT Festival {currentYear} dan Seminar</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                    16 September {currentYear}
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                            </div>
                            <div className="order-1 bg-gray-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-center text-xs sm:text-xl">Pelatihan Android dan Web Development</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                    17 - 20 September {currentYear}
                                </p>
                            </div>
                        </div>
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 text-center text-xs sm:text-xl">Penutupan Pendaftaran Lomba</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                    25 September {currentYear}
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">6</h1>
                            </div>
                            <div className="order-1 bg-gray-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-center text-xs sm:text-xl">Technical Meeting Lomba (Photography, Poster Design, & Web Design)</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                    27 September {currentYear}
                                </p>
                            </div>
                        </div>
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">7</h1>
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 text-center text-xs sm:text-xl">Technical Meeting Mobile Legend</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                    28 September {currentYear}
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">8</h1>
                            </div>
                            <div className="order-1 bg-gray-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-center text-xs sm:text-xl">Lomba Mobile Legends</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                    29 September {currentYear}
                                </p>
                            </div>
                        </div>
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">9</h1>
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 text-center text-xs sm:text-xl">Pengumpulan Karya Lomba</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                    30 September {currentYear}
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">10</h1>
                            </div>
                            <div className="order-1 bg-gray-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-center text-xs sm:text-xl">Penjurian Lomba (Photography & Poster Design)</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                    5 Oktober {currentYear}
                                </p>
                            </div>
                        </div>
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">11</h1>
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 text-center text-xs sm:text-xl">Penjurian Lomba Web Design</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                    06 Oktober {currentYear}
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        {/* <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">12</h1>
                            </div>
                            <div className="order-1 bg-gray-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-center text-xs sm:text-xl">Presentasi Lomba Web Development</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                    05 Oktober {currentYear}
                                </p>
                            </div>
                        </div> */}
                        {/* Left timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">12</h1>
                            </div>
                            <div className="order-1 bg-gray-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-center text-xs sm:text-xl">Penutupan Acara IT Festival {currentYear} & Pengumuman Pemenang</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                    10 Oktober {currentYear}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Timeline Section */}

            {/* powered by */}
            <div data-aos="fade-up" data-aos-duration="1000" className="bg-gray-900 mb-12 justify-center">
                <p className='text-center comfortaa text-gray-200 mt-10 text-xl sm:text-4xl'><span className='bg-gradient-to-br from-gray-500 via-gray-300 to-gray-200 rounded-lg text-md px-10 py-1 text-gray-900'>powered by</span></p>
                <div className='w-full mt-6 sm:mt-10 flex justify-center items-center'>
                    {data.filter((f) => f.name === 'poweredby').map((d, id) => (
                        <div key={id}>
                            <img className='w-40 items-center' src={d.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>


            {/* Section Sponsors Started */}
            <div data-aos="fade-up" data-aos-duration="1000" className="bg-gray-900 py-20 -mb-2 sm:-mb-0">
                <p className='text-center comfortaa text-gray-200 mt-10 text-xl sm:text-4xl'><span className='bg-gradient-to-br from-gray-500 via-gray-300 to-gray-200 rounded-lg text-md px-10 py-1 text-gray-900'>sponsorship</span></p>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={1}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper w-full mt-6 sm:mt-10">
                    {data.filter((f) => f.name === 'sponsor').map((d, id) => (
                        <SwiperSlide key={id}>
                            <img className='w-24' src={d.image} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* End Section Sponsors */}

            {/* Section Media Partner Started */}
            <div data-aos="fade-up" data-aos-duration="1000" className="bg-gray-900 py-20 -mb-2 sm:-mb-0">
                <p className='text-center comfortaa text-gray-200 mt-10 text-xl sm:text-4xl'><span className='bg-gradient-to-br from-gray-500 via-gray-300 to-gray-200 rounded-lg text-md px-10 py-1 text-gray-900'>media partner</span></p>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    autoplay={true}
                    className="mySwiper w-full mt-6 sm:mt-10">
                    {data.filter((f) => f.name === 'medpart').map((d, id) => (
                        <SwiperSlide key={id}>
                            <img className='w-24' src={d.image} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* End Section Media Partner */}


        </div>
    )
}

export default Home