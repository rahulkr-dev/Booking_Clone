import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { section1_url2 } from './detailsInarray';
const style = {width:'2900px'}

export default function HomeSectionCard2() {
    return (
        <Box m='1rem auto' w="85%">
            <Heading pt="2rem" m='10px 0' textAlign='left' fontSize='26px'>Browse by property type</Heading>
           <Box>
           <Swiper
                slidesPerView={4}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><Image src={section1_url2[0]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Hotel</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[1]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Apartments</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[2]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Resorts</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[3]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Villas</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[4]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Cabins</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[5]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Cottage</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[6]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Glamping</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[7]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Serviced apartments</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[8]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Holiday homes</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[9]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Guest homes</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[10]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Hotels</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[11]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Motels</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[12]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Hotel</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[13]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Hotel</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[14]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Hotel</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url2[15]} /><Text fontWeight="bold" fontSize="17px" textAlign='left' mt="10px">Hotel</Text><Text textAlign='left' fontSize="14px" mb="1rem" >901,735 hotel</Text></SwiperSlide>
            </Swiper>
           </Box>
        </Box>

    )
}
