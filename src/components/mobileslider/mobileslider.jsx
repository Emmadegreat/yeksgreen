import {useState, useEffect} from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const MobileSlider = () => {

    const MobileImages = [
        "https://res.cloudinary.com/dbnxbly1r/image/upload/v1716653493/hyggex/yeksgreen/mobileslide1_kl5yew.svg",
        "https://res.cloudinary.com/dbnxbly1r/image/upload/v1716654690/hyggex/yeksgreen/mobileslide2_c3y1dr.png",
        "https://res.cloudinary.com/dbnxbly1r/image/upload/v1716654689/hyggex/yeksgreen/mobileslide3_ou7hpu.png",
        "https://res.cloudinary.com/dbnxbly1r/image/upload/v1716654691/hyggex/yeksgreen/mobileslide4_hls7ug.svg",
        "https://res.cloudinary.com/dbnxbly1r/image/upload/v1716654701/hyggex/yeksgreen/mobileslide5_kizytz.svg",
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % MobileImages.length);
        },3000); // Change 3000 for desired interval in milliseconds

        return () => clearInterval(intervalId);
    }, [MobileImages.length]);


    return (
        <div className='md:hidden block px-6 md:px-14 mt-8'>
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
                {MobileImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full relative">
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="h-full w-full object-cover mb-10"
                            />

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MobileSlider