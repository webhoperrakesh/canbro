"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from 'next/link'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

type Product = {
  id: number;
  title: string;
  image: string;
  slug: string;
  desc: string;
  composition: string;
};

type ProductsProps = {
  products: Product[];
  showText?: boolean;
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-[#212088] hover:bg-[#1a1a6b] text-white rounded-full w-11 h-11 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group hover:cursor-pointer"
      onClick={onClick}
      aria-label="Previous product"
    >
      <FaArrowLeft className="md:h-6" />
    </button>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-[#212088] hover:bg-[#1a1a6b] text-white rounded-full w-11 h-11 shadow-lg hover:shadow-xl ttransition-all duration-300 hover:scale-105 flex items-center justify-center group hover:cursor-pointer"
      onClick={onClick}
      aria-label="Next product"
    >
      <FaArrowRight className="md:h-6" />
    </button>
  );
}



const SlickSlider = ({ products }: ProductsProps) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    className: "center max-w-[90vw]  ",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1440, // for tablets and smaller laptops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // for tablets and smaller laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // for mobile landscape and small tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480, // for mobile portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>

        {products?.map((product, index) => (

          <Link
            href={`/product/${product.slug}`}
          >
            <div className="relative p-2" key={index}>

              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}` || "https://placehold.co/200x280.png?text=No+Image"}
                alt={`Previous product - ${product.title}`}
                width={200}
                height={280}
                className="rounded-2xl h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                draggable={false}
                style={{ width: "100%" }}
              />
            </div>
          </Link>

        ))}

      </Slider>
    </>
  )
}

export default SlickSlider