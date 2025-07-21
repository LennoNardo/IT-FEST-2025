import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Badge, Modal, Button } from 'flowbite-react'
import { Success, Error, WebinarImage } from '../assets/images/layout'
import { Helmet } from 'react-helmet'
import { Logo } from '../assets/images/layout'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { NengAmel, BangJuju, GuestStar, Speaker } from '../assets/images/pembicaraguest/layout'

const Seminar = () => {

  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])

  const [loading, setLoading] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // Get Data state
  const [data, setData] = useState([])

  // Post Data State
  const [nama, setNama] = useState('')
  const [npm, setNpm] = useState('')
  const [no_hp, setNohp] = useState('')
  const [instansi, setInstansi] = useState('')
  const [jurusan, setJurusan] = useState('')

  // Form Conditional state for Modal
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState()

  // Modals State
  const [success, setSuccess] = useState(false)

  // Automatically update years
  const currentYear = new Date().getFullYear();

  // Get Data API
  useEffect(() => {
    Axios.get('https://itfest.my.id/api/webinar').then(res => setData(res.data.data))
  }, [])


  // Post Data API
  const handleSubmit = async (e) => {
    setLoading(true)
    setModal(true)
    e.preventDefault()
    const postData = new FormData()
    postData.append('nama', nama)
    postData.append('npm', npm)
    postData.append('no_hp', no_hp)
    postData.append('instansi', instansi)
    postData.append('jurusan', jurusan)

    try {
      const response = await Axios.post('https://itfest.my.id/api/webinar', postData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      if (response.status === 201) {
        setSuccess(true)
        setShow(true)
        setLoading(false)
        setModal(false)
      }
    } catch (error) {
      setSuccess(false)
      setShow(true)
      setModal(false)
    }

  }

  return (
    <div className='bg-gradient-to-tl flex-col  from-gray-900 via-gray-900 to-gray-700 w-full justify-center min-h-screen flex items-center'>
      <Helmet>
        <meta name="description" content="Seminar IT FESTIVAL 2024" />
        <meta name="keywords" content="Seminar" />
        <title>Seminar IT FESTIVAL 2024</title>
        <link rel="icon" href={Logo} />
      </Helmet>
      <div className="sm:px-20  min-h-screen items-center justify-center flex flex-col sm:flex-row-reverse">
        <img src={WebinarImage} alt="" className='w-full sm:w-2/5' />
        <div className="text-center sm:text-left">
          <p className="zaptron text-center sm:text-5xl text-4xl mt-4 text-white animate-pulse">Seminar</p>
        </div>
      </div>
      <p data-aos="fade-up" data-aos-duration="1000" className='w-80 border border-gray-400 py-1 px-4 rounded-lg text-white text-center comfortaa text-lg mb-5 sm:mb-16 overflow-hidden whitespace-no-wrap'>Challanges and Opportunities in Developing Digital Educational Contents</p>
        
      {/* <a data-aos="fade-up" data-aos-duration="1000"
        href="#daftar"
        className="flex flex-col items-center md:justify-end rounded-lg md:flex-row-reverse sm:py-24 md:max-w-xl "
      >
        <img
          className="object-cover w-32 h-48 rounded-full md:h-auto md:w-48 "
          src={Animati}
          alt=""
        />
        <div className="flex flex-col comfortaa text-center sm:text-left justify-between p-4 leading-normal">
          <p className="font-normal text-xs sm:text-sm text-gray-400">
            Speaker :
          </p>
          <h5 className="text-2xl font-bold tracking-tight  text-white">
            Prof. TS DR HJH Anitawati Mohd Lukman
          </h5>
          <p className="mb-3 font-normal text-xs sm:text-sm text-gray-400">
            Professor at Faculty of Computer & Mathematical Sciences University of Technology MARA
          </p>
          <p className="mb-3 font-normal  text-gray-200">
            <i>"Kansei and Design of IT Artefacts"</i>
          </p>
          <p className="mb-3 font-normal text-xs text-gray-400">
            17 Oktober {currentYear} | 12.45 WIB
          </p>
        </div>
      </a> */}

      {/* <a data-aos="fade-up" data-aos-duration="1000"
        href="#daftar"
        className="flex flex-col items-center md:justify-end rounded-lg md:flex-row sm:py-24 md:max-w-xl "
      >
        <img
          className="object-cover w-32 h-48 rounded-full md:h-auto md:w-48 "
          src={Kevin}
          alt=""
        />
        <div className="flex flex-col comfortaa text-center sm:text-left justify-between p-4 leading-normal">
          <p className="font-normal text-xs sm:text-sm text-gray-400">
            Speaker :
          </p>
          <h5 className="text-2xl font-bold tracking-tight  text-white">
            Kevin Dean Dra
          </h5>
          <p className="font-normal text-xs sm:text-sm text-gray-400">
            Founder of Pastee.co
          </p>
          <p className="mb-3 font-normal text-gray-200">
            <i>"How to become a young creative preneur"</i>
          </p>
          <p className="mb-3 font-normal text-xs text-gray-400">
            17 Oktober {currentYear} | 13.25 WIB
          </p>
        </div>
      </a> */}
      
      <a data-aos="fade-up" data-aos-duration="1000"
        href="#daftar"
        className="flex sm:py-24 flex-col items-center md:justify-end rounded-lg md:flex-row md:max-w-4xl "
      >
        <img
          className="object-cover w-64 h-80 rounded-none md:h-auto md:w-80"
          src={GuestStar}
          alt=""
        />
        <div className="flex comfortaa flex-col text-center sm:text-left justify-between p-4 leading-normal">
          <p className="font-normal text-sm sm:text-sm text-gray-400">
            Guest Star :
          </p>
          <h5 className="zaptron text-3xl tracking-widest  text-white">
          Shandy Luo
          </h5>
          <p className="mb-3 font-normal text-xs sm:text-sm text-gray-400">
            Content Creator
          </p>
          <p className="mb-3 font-normal  text-gray-200">
            <i>"Optimizing Digital Content for Effective Learning"</i>
          </p>
          <p className="mb-3 font-normal text-xs text-gray-400">
            16 September {currentYear} | 14.45 WIB
          </p>
        </div>
      </a>

      <a data-aos="fade-up" data-aos-duration="1000"
        href="#daftar"
        className="flex flex-col items-center md:justify-end rounded-lg md:flex-row-reverse md:max-w-xl "
      >
        <img
          className="object-cover w-48 h-64 rounded-none md:h-auto md:w-64 "
          src={Speaker}
          alt=""
        />
        <div className="flex flex-col comfortaa text-center sm:text-left justify-between p-4 leading-normal">
          <p className="font-normal text-xs sm:text-sm text-gray-400">
            Speaker :
          </p>
          <h5 className="zaptron text-3xl tracking-widest  text-white">
            Nabila Carissa
          </h5>
          <p className="mb-3 font-normal text-xs sm:text-sm text-gray-400">
            Content Creator & Social Media Influencer
          </p>
          <p className="mb-3 font-normal text-gray-200">
            <i>"Self-Confident Importance for Struggling In Digital Era"</i>
          </p>
          <p className="mb-3 font-normal text-xs text-gray-400">
            16 September {currentYear} | 13.45 WIB
          </p>
        </div>
      </a>

      <div data-aos="fade-up" data-aos-duration="1000" className="px-8 pb-10 -mb-1">
        <div className="flex justify-between mt-2">
          
          <a href="https://bit.ly/FormSeminar_ITFEST2024" target="_blank" rel='noreferrer' className='py-1 px-10 comfortaa hover:bg-gray-500 sm:py-2 sm:px-24 transition duration-200 text-sm rounded-lg text-gray-200 bg-gray-800 mt-10'>
          <svg className="w-4 md:w-4 mr-2 inline-block " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>Daftar</a>
        </div>
      </div>
      {/* <p data-aos="fade-up" data-aos-duration="1000" className='text-white zaptron text-sm sm:text-lg border-b border-gray-200 mt-10 py-2'>Form Pendaftaran Webinar</p>
      <form id='daftar' data-aos="fade-up" data-aos-duration="1000" className='w-80 mt-10' encType='multipart/form-data' onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={(e) => setNama(e.target.value)}
            type="text"
            value={nama}
            id="nama"
            className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
            required="Form ini wajib di isi"
          />
          <label
            htmlFor="nama"
            className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nama
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={(e) => setInstansi(e.target.value)}
            type="text"
            value={instansi}
            id="instansi"
            className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
            required="Form ini wajib diisi"
          />
          <label
            htmlFor="instansi"
            className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Asal Universitas
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={(e) => setJurusan(e.target.value)}
            type="text"
            value={jurusan}
            id="jurusan"
            className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
            required="Form ini wajib diisi"
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Jurusan
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              onChange={(e) => setNpm(e.target.value)}
              type="number"
              value={npm}
              id="npm"
              className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              placeholder=" "
              required="form ini wajib diisi"
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              NIM
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              onChange={(e) => setNohp(e.target.value)}
              type="number"
              value={no_hp}
              id="no_hp"
              className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              placeholder=" "
              required="Form ini wajib diisi"
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nomor WA
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-gray-600 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          DAFTAR
        </button>

      </form>
      <div data-aos="fade-up" data-aos-duration="1000" className="py-2 px-12 text-sm sm:text-lg sm:px-24 border-2 border-gray-200 text-center mt-10 text-gray-200 comfortaa rounded-lg">
        <p className='flex justify-center'>Total Pendaftar  <span className='ml-2'><Badge color="info">{data.length}</Badge></span></p>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" className="px-5">
      </div>
      <p className='text-xs sm:text-base py-3 text-white'>ada pertanyaan? <a target="blank" className='text-blue-500 underline' href="https://wa.me/6282269975438?text=Halo%20kak,%20Saya%20mau%20bertanya%20perihal%20Webinar%20IT%20FESTIVAL%202022">Klik disini untuk menghubungi admin</a></p> */}

      {/* Modal */}
      {success ?
        <Modal
          className="!bg-gray-600"
          show={show}
          size="md"
          popup={true}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <img src={Success} alt="" />
              <h3 className="mb-5 comfortaa text-sm font-normal text-green-500 ">
                Pendaftaran Kamu Sudah masuk, Erco Verifikasi dulu, Yaa!
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="success"
                  onClick={() => setShow(false)}
                >
                  Okedeh
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        : <Modal
          show={show}
          size="md"
          popup={true}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <img src={Error} alt="" />
              <h3 className="mb-5 text-sm font-normal text-red-600 comfortaa">
                Yahh, Kayaknya ada yang salah, Pastikan data yang dikirimkan benar semua, yaa!
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  onClick={() => setShow(false)}
                >
                  Okedeh
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>}
      {loading ?
        <Modal
          show={modal}
          size="md"
          popup={true}
        >
          <Modal.Body>
            <div class="text-center">
              <div role="status">
                <p className='py-5 font-bold text-gray-900 dark:text-white comfortaa'>Bentar, Erco proses dulu...</p>
                <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        : false}
    </div>
  )
}

export default Seminar