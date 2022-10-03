import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Image } from '@chakra-ui/react';
import { section1_url2 } from './detailsInarray';

export default function HomeSectionCard2() {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={0}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><Image src={section1_url2[0]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[1]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[2]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[3]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[4]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[5]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[6]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[7]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[8]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[9]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[10]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[11]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[12]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[13]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[14]} /></SwiperSlide>
            <SwiperSlide><Image src={section1_url2[15]} /></SwiperSlide>
        </Swiper>

    )
}
