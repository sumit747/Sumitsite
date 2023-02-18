import React from 'react'
import './Testimorials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';
import profile from "../../Img/cling.png"

const Testimorials = () => {
    const clients = [
        {
            img: profile,
            point: "This is the software companey and This companay is make a website useing ReactJs "
        },
        {
            img: profile,
            point: "This is the Fast and rensopncive Website "
        },
        {
            img: profile,
            point: "Cling Multi solution pvt. ltd. If Good company in This World"
        }
    ]
    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients Work always || </span>
                <span>Exceptional Work </span>
                <span>|| My Work and Aproved</span>
                <div className="blur t-blur1" style={{ background: "purple" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {clients.map((client, Index) => {
                        return (
                            <SwiperSlide key={Index}>
                                <div className='slide'>
                                    <img src={client.img} alt="" />
                                    <span>{client.point}</span>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};
export default Testimorials
