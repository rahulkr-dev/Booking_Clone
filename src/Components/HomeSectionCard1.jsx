import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Image } from '@chakra-ui/react';
import { section1_url } from './detailsInarray';

export default function HomeSectionCard1() {
    return (
        <Swiper
            slidesPerView={6}
            spaceBetween={10}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><Image src={section1_url[0]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url[1]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url[2]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url[3]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url[4]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url[5]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url[6]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url[7]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url[8]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url[9]} /></SwiperSlide>
        </Swiper>

    )
}
