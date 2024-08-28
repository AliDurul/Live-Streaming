'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard";

export default function SliderComponent({ myList }: { myList: any }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container ">
      <Slider {...settings} className="">
        <div className="h-16 bg-red-300 text-white">
          <h3>1</h3>
        </div>
        <div className="h-16 bg-red-300 text-white">
          <h3>1</h3>
        </div>
        <div className="h-16 bg-red-300 text-white">
          <h3>1</h3>
        </div>

      </Slider>
    </div>
  );
}