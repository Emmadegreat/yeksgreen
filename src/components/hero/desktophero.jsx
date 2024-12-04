import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

const DesktopHero = () => {

    const Images = [
        "https://res.cloudinary.com/dbnxbly1r/image/upload/v1716882782/hyggex/yeksgreen/hero-slide1_hnobiy.png",
        "https://res.cloudinary.com/dbnxbly1r/image/upload/v1716402736/hyggex/yeksgreen/slide2_gmpcgc.svg",
        "https://res.cloudinary.com/dbnxbly1r/image/upload/v1716375549/hyggex/yeksgreen/slide3_zs5g5x.svg",
        "https://res.cloudinary.com/dbnxbly1r/image/upload/v1716883387/hyggex/yeksgreen/hero-slide4_cl0uf3.png",
        "https://res.cloudinary.com/dbnxbly1r/image/upload/v1716402993/hyggex/yeksgreen/slide5_uldw8u.svg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
        },3000);

        return () => clearInterval(intervalId);
    }, [Images.length]);

    // const handleSelect = (selected) => {
    //     setCurrentIndex(selected);
    // };


    return (
        <>

            <div className='pb-4 md:block hidden'>
                <Swiper
                    className=''
                    modules={[Navigation, Pagination, Autoplay]}
                    //navigation
                    pagination={{ clickable: true }}
                    loop
                    autoplay={{ delay: 3500 }}
                    onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                    initialSlide={currentIndex}
                >
                    {Images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-full relative">
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="h-[100vh] w-full object-cover mb-10"
                                />
                                <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-10 bottom-8">
                                    <div className='font-[800] text-[80px] text-[#fff] leading-[95px]'>
                                        <h1>Learn to cook</h1>
                                        <h1 className="text-[#058b42]">healthy</h1>
                                        <h1>Nigerian recipes</h1>
                                    </div>
                                    <div className='mt-5 flex flex-col'>
                                        <p className='text-[#16DC65]'>Ranging from meals to dessert to drinks.</p>
                                        <div className='flex items-center'>
                                            <input
                                                type="search"
                                                name="search"
                                                placeholder='Search recipe'
                                                className='p-2 mt-8 bg-transparent h-[44px] text-[16px] w-[30%] text-white search-input'
                                            />
                                            <button
                                                type="submit"
                                                className='bg-white mt-8 h-[44px] p-2 text-[#000] w-[55px] border-weight-[0rem] submit-btn'
                                            >
                                                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className='ml-2'
                                                >
                                                    <path d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M28 28L22.2 22.2" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </>
    )
}

export default DesktopHero