import data from "../Data/data";
import BoxSlider from "./boxSlider";
import NewsBox from "./newsBox";
import RecentParent from "./recentParent";
import Categories from "./categories";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Home(){
    let[allData,setAllData]=React.useState(data);

    let sliderArray=allData.map((da,index)=>{
        return(
            <SwiperSlide key={index}>
                <BoxSlider {...da}/>
            </SwiperSlide>
        )
    })

    let newsArr=allData.map((da,index)=>{
        return(
            <NewsBox
            {...da}
            key={index}
            />
        )
    })
    return(
        <div className="home">
                <Swiper
        slidesPerView={1}
        spaceBetween={3}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {sliderArray}
      </Swiper>
      <div className="flex-home">
          <div className="page-news">
            {newsArr}
          </div>
          <div className="static-parent">
            <RecentParent /> 
            <Categories/>
          </div>
      </div>
        </div>
    )
}