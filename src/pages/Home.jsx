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
        <div className='relative' style={{background: 'linear-gradient(135deg, #16213d 0%, #222222 100%)'}}>
            <Helmet>
                <meta name="description" content="IT FESTIVAL 2024 Himpunan Mahasiswa Jurusan Manajemen Informatika Politeknik Negeri Sriwijaya" />
                <meta name="keywords" content="IT FESTIVAL 2025" />
                <title>IT FESTIVAL 2025</title>
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

            <div data-aos="fade-up" data-aos-duration="1000" className="flex sm:flex-row flex-col justify-evenly items-center py-20 relative">
                <div className="geometric-decoration top-10 left-10" style={{animationDelay: '2s'}}></div>
                <div className="text-center sm:text-left z-10">
                    <p className='valorant-font text-center text-white text-3xl sm:text-6xl mb-4'>
                        Introducing, <span className='text-glow-pink text-pink-400'>Sparco</span>
                    </p>
                    <p className='text-lavender text-center sm:text-left mb-4 sm:mb-6 comfortaa text-sm sm:text-base'>Official Mascot IT FESTIVAL 2025</p>
                    <p className='comfortaa text-gray-200 hidden sm:block w-96 leading-relaxed'>Robot yang memiliki kemampuan berpikir kreatif, semangat tinggi, pintar berkomunikasi, dan memiliki daya tarik yang luar biasa.</p>
                </div>
                <div className='relative z-10'>
                    <img src={Maskot} className='sm:w-80 w-48 glow-lavender rounded-lg' alt="" />
                </div>
            </div>

            {/* End Maskot Section */}

            {/* Timeline Section */}
            <div className="text-center mt-10 sm:mt-20 mb-10">
                <span className='valorant-font text-2xl sm:text-4xl text-white valorant-border inline-block px-8 sm:px-16 py-3 glow-pink'>TIMELINE</span>
            </div>
            <div className='min-h-screen flex items-center relative'>
                <div className="geometric-decoration top-20 right-10" style={{animationDelay: '4s'}}></div>
                <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div
                            className="border-2 absolute h-full border-pink-500 opacity-50"
                            style={{ left: "50%" }}
                        />
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-pink-500 to-purple-400 shadow-xl w-10 h-10 rounded-full glow-pink">
                                <h1 className="mx-auto font-semibold text-lg text-white valorant-font">1</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-pink">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Pembukaan Pendaftaran Perlombaan, Seminar dan Pelatihan</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                    05 Agustus 2025
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-purple-400 to-pink-500 shadow-xl w-10 h-10 rounded-full glow-lavender">
                                <h1 className="mx-auto text-white font-semibold text-lg valorant-font">2</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-lavender">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Penutupan Pendaftaran Peserta Seminar dan Pelatihan</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-lavender">
                                    08 September 2025
                                </p>
                            </div>
                        </div>
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-pink-500 to-purple-400 shadow-xl w-10 h-10 rounded-full glow-pink">
                                <h1 className="mx-auto font-semibold text-lg text-white valorant-font">3</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-pink">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Pembukaan Acara IT Festival 2025 dan Seminar</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-pink-300">
                                    16 September 2025
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-purple-400 to-pink-500 shadow-xl w-10 h-10 rounded-full glow-lavender">
                                <h1 className="mx-auto text-white font-semibold text-lg valorant-font">4</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-lavender">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Pelatihan Android dan Web Development</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-lavender">
                                    17 - 20 September 2025
                                </p>
                            </div>
                        </div>
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-pink-500 to-purple-400 shadow-xl w-10 h-10 rounded-full glow-pink">
                                <h1 className="mx-auto font-semibold text-lg text-white valorant-font">5</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-pink">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Penutupan Pendaftaran Lomba</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-pink-300">
                                    25 September 2025
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-purple-400 to-pink-500 shadow-xl w-10 h-10 rounded-full glow-lavender">
                                <h1 className="mx-auto text-white font-semibold text-lg valorant-font">6</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-lavender">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Technical Meeting Lomba (Photography, Poster Design, & Web Design)</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-lavender">
                                    27 September 2025
                                </p>
                            </div>
                        </div>
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-pink-500 to-purple-400 shadow-xl w-10 h-10 rounded-full glow-pink">
                                <h1 className="mx-auto font-semibold text-lg text-white valorant-font">7</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-pink">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Technical Meeting Mobile Legend</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-pink-300">
                                    28 September 2025
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-purple-400 to-pink-500 shadow-xl w-10 h-10 rounded-full glow-lavender">
                                <h1 className="mx-auto text-white font-semibold text-lg valorant-font">8</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-lavender">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Lomba Mobile Legends</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-lavender">
                                    29 September 2025
                                </p>
                            </div>
                        </div>
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-pink-500 to-purple-400 shadow-xl w-10 h-10 rounded-full glow-pink">
                                <h1 className="mx-auto font-semibold text-lg text-white valorant-font">9</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-pink">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Pengumpulan Karya Lomba</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-pink-300">
                                    30 September 2025
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-purple-400 to-pink-500 shadow-xl w-10 h-10 rounded-full glow-lavender">
                                <h1 className="mx-auto text-white font-semibold text-lg valorant-font">10</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-lavender">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Penjurian Lomba (Photography & Poster Design)</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-lavender">
                                    5 Oktober 2025
                                </p>
                            </div>
                        </div>
                        {/* right timeline */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12" />
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-pink-500 to-purple-400 shadow-xl w-10 h-10 rounded-full glow-pink">
                                <h1 className="mx-auto font-semibold text-lg text-white valorant-font">11</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-pink">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Penjurian Lomba Web Design</h3>
                                <p className="text-xs text-center sm:text-sm leading-snug tracking-wide text-pink-300">
                                    06 Oktober 2025
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
                            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-purple-400 to-pink-500 shadow-xl w-10 h-10 rounded-full glow-lavender">
                                <h1 className="mx-auto font-semibold text-lg text-white valorant-font">12</h1>
                            </div>
                            <div className="order-1 valorant-card shadow-xl w-5/12 px-6 py-4 glow-lavender">
                                <h3 className="mb-3 valorant-font text-white text-center text-xs sm:text-lg">Penutupan Acara IT Festival 2025 & Pengumuman Pemenang</h3>
                                <p className="text-xs text-center sm:text-sm font-medium leading-snug tracking-wide text-lavender">
                                    10 Oktober 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Timeline Section */}

            {/* powered by */}
            <div data-aos="fade-up" data-aos-duration="1000" className="mb-12 justify-center py-20 relative">
                <div className="geometric-decoration bottom-10 right-20" style={{animationDelay: '1s'}}></div>
                <div className="text-center mb-10">
                    <span className='valorant-font text-2xl sm:text-4xl text-white valorant-border inline-block px-8 sm:px-16 py-3 glow-lavender'>POWERED BY</span>
                </div>
                <div className='w-full mt-6 sm:mt-10 flex justify-center items-center'>
                    {data.filter((f) => f.name === 'poweredby').map((d, id) => (
                        <div key={id}>
                            <img className='w-40 items-center' src={d.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>


            {/* Section Sponsors Started */}
            <div data-aos="fade-up" data-aos-duration="1000" className="py-20 -mb-2 sm:-mb-0 relative">
                <div className="geometric-decoration top-10 left-20" style={{animationDelay: '3s'}}></div>
                <div className="text-center mb-10">
                    <span className='valorant-font text-2xl sm:text-4xl text-white valorant-border inline-block px-8 sm:px-16 py-3 glow-pink'>SPONSORSHIP</span>
                </div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={1}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper w-full mt-6 sm:mt-10">
                    {data.filter((f) => f.name === 'sponsor').map((d, id) => (
                        <SwiperSlide key={id}>
                            <img className='w-24 hover:scale-110 transition-transform duration-300 glow-pink' src={d.image} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* End Section Sponsors */}

            {/* Section Media Partner Started */}
            <div data-aos="fade-up" data-aos-duration="1000" className="py-20 -mb-2 sm:-mb-0 relative">
                <div className="geometric-decoration bottom-20 right-10" style={{animationDelay: '5s'}}></div>
                <div className="text-center mb-10">
                    <span className='valorant-font text-2xl sm:text-4xl text-white valorant-border inline-block px-8 sm:px-16 py-3 glow-lavender'>MEDIA PARTNER</span>
                </div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    autoplay={true}
                    className="mySwiper w-full mt-6 sm:mt-10">
                    {data.filter((f) => f.name === 'medpart').map((d, id) => (
                        <SwiperSlide key={id}>
                            <img className='w-24 hover:scale-110 transition-transform duration-300 glow-lavender' src={d.image} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* End Section Media Partner */}


        </div>
    )
}

export default Home