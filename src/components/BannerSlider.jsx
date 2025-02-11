// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/images/carousel1.webp'
import bgimg2 from '../assets/images/carousel2.jpg'
import bgimg3 from '../assets/images/carousel3.avif'

export default function Carousel() {
    return (
        <div className='container px-4 md:px-0 mx-auto pt-24'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper rounded-md h-[70vh] object-cover'
            >
                <SwiperSlide>
                    <Slide
                        className="rounded-md  h-full object-cover"
                        image={bgimg1}
                        text='Find the Best Services Near You'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        className="rounded-md  h-full object-cover"
                        image={bgimg2}
                        text='Share Your Experience and Help Others'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        className="rounded-md h-full object-cover" 
                        image={bgimg3}
                        text='Join Our Community Today!'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
