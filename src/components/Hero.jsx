import React, { useState, useEffect, useRef } from 'react'
import dayjs from 'dayjs'
import './style.css'
import Typed from 'typed.js'

const defaultTime = {
    months: '00',
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
}

const Hero = ({ countdownTimeStamp }) => {
    const el = useRef(null)
    useEffect(() => {
        new Typed(el.current, {
            strings: ['IT FESTIVAL 2024'],
            loop: false,
            typeSpeed: 100,
            showCursor: false,
        })
    }, [])


    // const option = {
    //     strings : ['IT FESTIVAL 2023'],
    //     typeSpeed : 40
    // }

    // let typed = new Typed('.type', option)

    const getRemainTime = (timeStamps) => {
        const timeStampsDayjs = dayjs(timeStamps)
        const nowDayjs = dayjs()
        if (timeStampsDayjs.isBefore(nowDayjs)) {
            return {
                months: '00',
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
            }
        }
        return {
            months: getRemainMonths(nowDayjs, timeStampsDayjs),
            days: getRemainDays(nowDayjs, timeStampsDayjs),
            hours: getRemainHours(nowDayjs, timeStampsDayjs),
            minutes: getRemainMinutes(nowDayjs, timeStampsDayjs),
            seconds: getRemainSeconds(nowDayjs, timeStampsDayjs),
        }
    }

    const getRemainMonths = (nowDayjs, timeStampsDayjs) => {
        const months = timeStampsDayjs.diff(nowDayjs, 'months') % 12
        return months
    }

    const getRemainDays = (nowDayjs, timeStampsDayjs) => {
        const days = timeStampsDayjs.diff(nowDayjs, 'days') % 31
        return days
    }

    const getRemainHours = (nowDayjs, timeStampsDayjs) => {
        const hours = timeStampsDayjs.diff(nowDayjs, 'hours') % 24
        return hours
    }

    const getRemainMinutes = (nowDayjs, timeStampsDayjs) => {
        const minutes = timeStampsDayjs.diff(nowDayjs, 'minutes') % 60
        return minutes
    }

    const getRemainSeconds = (nowDayjs, timeStampsDayjs) => {
        const seconds = timeStampsDayjs.diff(nowDayjs, 'seconds') % 60
        return seconds
    }

    const [nowDate, setNowDate] = useState(defaultTime)
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateTime(countdownTimeStamp)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [countdownTimeStamp])

    const updateTime = (countdown) => {
        setNowDate(getRemainTime(countdown))

    }

    return (
        <div className='bg-gradient-to-tl from-gray-900 via-gray-900 to-gray-700 min-h-screen flex justify-center items-center'>
            <div className="flex flex-col items-center px-5">
                <div className="text-white mb-4">
                    <p className='text-lg md:text-xl comfortaa'>Selamat datang di</p>
                    <p className='zaptron text-2xl md:text-6xl type' ><span ref={el}></span></p>
                </div>
                <p className=' text-lg text-gray-400 sm:text-xl comfortaa mb-1'>Berakhir Dalam</p>
                <div className="flex justify-evenly text-white comfortaa sm:text-2xl">
                    <div className="text-center mr-3 bg-gray-700 rounded-lg p-3">
                        <p>{nowDate.months}</p>
                        <p>Bulan</p>
                    </div>
                    <div className="text-center mr-3 bg-gray-700 rounded-lg p-3">
                        <p>{nowDate.days}</p>
                        <p>Hari</p>
                    </div>
                    <div className="text-center mr-3 bg-gray-700 rounded-lg p-3">
                        <p>{nowDate.hours}</p>
                        <p>Jam</p>
                    </div>
                    <div className="text-center mr-3 bg-gray-700 rounded-lg p-3">
                        <p>{nowDate.minutes}</p>
                        <p>Menit</p>
                    </div>
                    <div className="text-center mr-3 bg-gray-700 rounded-lg p-3">
                        <p>{nowDate.seconds}</p>
                        <p>Detik</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero