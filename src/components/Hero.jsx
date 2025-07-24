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
        <div className='relative min-h-screen flex justify-center items-center grid-bg overflow-hidden' style={{background: 'linear-gradient(135deg, #16213d 0%, #222222 100%)'}}>
            <div className="geometric-decoration top-20 right-20"></div>
            <div className="geometric-decoration bottom-20 left-20" style={{animationDelay: '3s'}}></div>
            <div className="flex flex-col items-center px-5">
                <div className="text-white mb-8 text-center">
                    <p className='text-lg md:text-2xl comfortaa mb-4 text-glow-lavender'>Selamat datang di</p>
                    <p className='valorant-font text-3xl md:text-7xl type text-glow-pink' ><span ref={el}></span></p>
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-400 mx-auto mt-4"></div>
                </div>
                <p className='text-lg text-gray-300 sm:text-2xl valorant-font mb-6 text-glow-lavender'>Berakhir Dalam</p>
                <div className="flex justify-center gap-4 text-white comfortaa text-lg sm:text-2xl">
                    <div className="text-center valorant-card p-4 glow-pink">
                        <p className="text-2xl sm:text-3xl font-bold text-pink-400">{nowDate.months}</p>
                        <p className="text-sm valorant-font">Bulan</p>
                    </div>
                    <div className="text-center valorant-card p-4 glow-pink">
                        <p className="text-2xl sm:text-3xl font-bold text-pink-400">{nowDate.days}</p>
                        <p className="text-sm valorant-font">Hari</p>
                    </div>
                    <div className="text-center valorant-card p-4 glow-pink">
                        <p className="text-2xl sm:text-3xl font-bold text-pink-400">{nowDate.hours}</p>
                        <p className="text-sm valorant-font">Jam</p>
                    </div>
                    <div className="text-center valorant-card p-4 glow-pink">
                        <p className="text-2xl sm:text-3xl font-bold text-pink-400">{nowDate.minutes}</p>
                        <p className="text-sm valorant-font">Menit</p>
                    </div>
                    <div className="text-center valorant-card p-4 glow-pink">
                        <p className="text-2xl sm:text-3xl font-bold text-pink-400">{nowDate.seconds}</p>
                        <p className="text-sm valorant-font">Detik</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero