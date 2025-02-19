import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../../../../React1/Hotel Dubai/app/src/assets/350x350 (1).png'
import img2 from '../../../../../React1/Hotel Dubai/app/src/assets/428x573 (2).png'
import img3 from '../../../../../JS/Js2Month2/FastCart2/Photos/Category-Headphone.png'
import img4 from '../../../../../JS/Js2Month2/FastCart2/Photos/Category-SmartWatch.png'
import jbl from '../../assets/speakerJBL.svg'
import ps5 from '../../assets/ps5.svg'
import speaker from '../../assets/speaker.svg'
import woman from '../../assets/woman.svg'
import perfume from '../../assets/perfume.svg'
import monitor from '../../assets/monitor.svg'


import '../../App.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CategoryCard from '@/components/categorysCard/categoryCard';
import { Button } from '@mui/material';
import ProductCard from '@/components/productsCard/productCard';




const Home = () => {
    let categories = [
        {
            id: 1,
            img: img3,
            title: "HeadPhones"
        },
        {
            id: 2,
            img: img4,
            title: "HeadPhones"
        },
        {
            id: 3,
            img: img3,
            title: "HeadPhones"
        },
    ]
    let prods=[
        {
            id:1,
            image:monitor,
            discount:25,
            title:"IPS LCD Gaming Monitor",
            price:900
        },
        {
            id:2,
            image:monitor,
            discount:40,
            title:"IPS LCD Gaming Monitor",
            price:656
        },
    ]
    const targetDate = new Date().getTime() + (3 * 24 * 60 * 60 + 23 * 60 * 60 + 19 * 60 + 56) * 1000;

    // State to store remaining time
    const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft(0);
            } else {
                setTimeLeft(difference);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = formatTime(timeLeft);
    return (
        <div className='mb-[200px]'>
            <div className='flex justify-around '>
                <ul className='flex flex-col gap-3'>
                    <li>Men's Fashion</li>
                    <li>Woman's Fashion</li>
                    <li>Electronics</li>
                    <li>Medicine</li>
                    <li>Home & Lifestyle</li>
                </ul>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-[70%] h-[300px]"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                    {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>
            </div>

            <section className='mt-[50px] p-[30px] sm:p-0'>
                <div className="flex space-x-6 text-4xl font-bold text-black ">
                    <h1 className='mr-20'>Flesh Sales</h1>
                    <div className="text-center">
                        <p>{String(days).padStart(2, "0")}</p>
                        <span className="text-gray-500 text-sm">Days</span>
                    </div>
                    <span className="text-red-400">:</span>
                    <div className="text-center">
                        <p>{String(hours).padStart(2, "0")}</p>
                        <span className="text-gray-500 text-sm">Hours</span>
                    </div>
                    <span className="text-red-400">:</span>
                    <div className="text-center">
                        <p>{String(minutes).padStart(2, "0")}</p>
                        <span className="text-gray-500 text-sm">Minutes</span>
                    </div>
                    <span className="text-red-400">:</span>
                    <div className="text-center">
                        <p>{String(seconds).padStart(2, "0")}</p>
                        <span className="text-gray-500 text-sm">Seconds</span>
                    </div>
                </div>
            </section>
            <section>
                <ProductCard data={prods}/>
            </section>

            <section className='categories flex flex-col gap-5'>
                <h1 className='font-[600] text-[30px]'>Browse By Category</h1>
                <CategoryCard data={categories} />
            </section>

            <section className='bg-black flex p-[50px]'>
                <div className='flex flex-col w-[50%] gap-5'>
                    <h1 className='text-[#00FF66]'>Categories</h1>
                    <h1 className='font-[600] text-[48px] text-white'>Enhance Your Music Experience</h1>
                    <div className='flex gap-10'>
                        <p className='flex items-center justify-center bg-white w-[65px] h-[65px] font-serif rounded-[50%]'>5 <br /> Days</p>
                        <p className='flex items-center justify-center bg-white w-[65px] h-[65px] font-serif rounded-[50%]'>23 <br />Hour</p>
                        <p className='flex items-center justify-center bg-white w-[65px] h-[65px] font-serif rounded-[50%]'>59 <br />Minutes</p>
                        <p className='flex items-center justify-center bg-white w-[65px] h-[65px] font-serif rounded-[50%]'>42 <br />Seconds</p>
                    </div>
                    <button className='bg-[#00FF66] w-[120px] p-[4px] rounded'>Buy Now!</button>
                </div>
                <div><img src={jbl} alt="" /></div>
            </section>

            <section className='p-[30px]'>
                <h1 className='font-[600] text-[35px]'>New Arrival</h1>
                <div className='flex justify-around'>
                    <div><img src={ps5} alt="" /></div>
                    <div className='flex flex-col gap-8'>
                        <div className="top"><img src={woman} alt="" /></div>
                        <div className="bottom flex gap-8">
                            <img src={speaker} alt="" />
                            <img src={perfume} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <ProductCard />
            </section>
           

        </div>
    )
}

export default Home