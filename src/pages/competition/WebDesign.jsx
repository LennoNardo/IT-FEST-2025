import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Badge, Modal, Button } from 'flowbite-react'
import { Success, Error, WebImage } from '../../assets/images/layout'
import { Helmet } from 'react-helmet'
import { Logo } from '../../assets/images/layout'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Fotografi = () => {

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
  const [image, setImage] = useState('')

  // Form Conditional state for Modal
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState()

  // Modals State
  const [success, setSuccess] = useState(false)


  // Get Data API
  useEffect(() => {
    Axios.get('https://itfest.my.id/api/web').then(res => setData(res.data.data))
  }, [])

  // Filter Data from API
  const dataFilterAcc = data.filter((f) => f.diterima === "1")
  const dataFilterDelay = data.filter((f) => f.diterima === "0")

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
    postData.append('bukti_bayar', image)

    try {
      const response = await Axios.post('https://itfest.my.id/api/web', postData, {
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
        <meta name="description" content="Kompetisi Web Desain" />
        <meta name="keywords" content="Kompetisi Web Desain" />
        <title>Kompetisi Web Desain</title>
        <link rel="icon" href={Logo} />
      </Helmet>
      <div className="min-h-screen items-center justify-center flex flex-col sm:flex-row">
        <img src={WebImage} alt="" className='sm:w-1/2 m-auto' />
        <div className="mb-28 -mt-24 sm:mb-0 sm:-mt-0 text-center sm:px-14">
          <p className="zaptron text-center sm:text-5xl text-4xl mt-4 text-white animate-pulse">Desain Web</p>
          <p className="comfortaa text-xs sm:text-base text-gray-500 text-center px-4 sm:px-10"><i>"Develop Business Technology With Compatible Creative Web"</i></p>
          <p className="mt-10 text-gray-200 comfortaa text-center mb-5">HTM Kompetisi Desain Web : 50k</p>
          <a href="https://drive.google.com/drive/folders/10wjk34knZCi8TX_k7TeDMqZ1V9cZfxVr" target="blank" className='py-2 px-10 bg-gray-400 rounded-lg hover:bg-gray-300'>Guide Book</a>
        </div>
      </div>
      <p data-aos="fade-up" data-aos-duration="1000" className='text-white zaptron text-sm sm:text-lg border-b border-gray-200 mt-10 py-2'>Form Pendaftaran Lomba Desain Web</p>
      <form data-aos="fade-up" data-aos-duration="1000" className='w-80 mt-10' encType='multipart/form-data' onSubmit={handleSubmit}>
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
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="bukti_bayar"
            className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Bukti Pembayaran (MAX 2MB)
          </label>
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
        <p className='flex justify-center'>Pendaftaran terverifikasi  <span className='ml-2'><Badge color="success">{dataFilterAcc.length}</Badge></span></p>
        <p className='flex justify-center'>Pendaftaran Tertunda  <span className='ml-2'><Badge color="warning">{dataFilterDelay.length}</Badge></span></p>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" className="px-5">
        <div className="p-2 text-left leading-normal comfortaa rounded-lg bg-yellow-100 my-5">
          <p className='text-sm text-yellow-600'><span className='text-yellow-600 font-extrabold'>Note :</span> Setiap Pendaftaran baru akan masuk ke pendaftaran tertunda sebelum di verifikasi oleh admin</p>
        </div>
      </div>
      <p className='text-xs sm:text-base pb-3 text-white'>ada pertanyaan? <a target="blank" className='text-blue-500 underline' href="https://wa.me/6285266101045?text=Halo%20kak,%20Saya%20mau%20bertanya%20perihal%20kompetisi%20Web%20Desain%20IT%20FESTIVAL%202022">Klik disini untuk menghubungi admin</a></p>

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
                Yahh, Kantong Erco gak muat. Kecilin file kamu lalu kirim lagi ke Erco, yaa!
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

export default Fotografi