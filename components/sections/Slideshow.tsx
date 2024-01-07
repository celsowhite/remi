"use client";
import { useState } from "react";
import { SanityImageType } from "@/types";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import SanityImage from "../components/SanityImage";
import PortableText from "../components/PortableText";
import { PortableTextBlock } from "@sanity/types";
import {
  keenArrowNav,
  keenDotNav,
  keenKeyboardControls,
} from "@/helpers/keenPlugins";

export interface SlideProps {
  _type: "slide";
  _key: string;
  caption?: PortableTextBlock | PortableTextBlock[];
  image: SanityImageType;
}
export interface SlidesProps {
  slides: SlideProps[];
  slidesPerView?: number;
  slideSpacing?: number;
  showArrowNav?: boolean;
  showDotNav?: boolean;
  loop?: boolean;
}

export default function Slideshow({
  slides,
  slidesPerView = 1,
  slideSpacing = 20,
  showArrowNav = true,
  showDotNav = true,
  loop = true,
}: SlidesProps) {
  /*----------------------
  Setup
  ----------------------*/
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        origin: "center",
        perView: slidesPerView,
        spacing: slideSpacing,
      },
      loop,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      breakpoints: {
        "(max-width: 768px)": {
          slides: {
            origin: "center",
            perView: 1,
          },
        },
      },
    },
    [keenArrowNav, keenDotNav, keenKeyboardControls]
  );

  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="keen-slider__container relative">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide) => {
          return (
            <div
              key={slide._key}
              className="keen-slider__slide min-w-full max-w-full"
            >
              <SanityImage data={slide.image} className="w-full" />
              {slide.caption && (
                <div className="p-2 mt-2">
                  <div className="max-w-4xl">
                    <PortableText value={slide.caption} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Arrow Navigation */}
      {showArrowNav && (
        <div>
          <div
            className="absolute w-10 left-5 top-1/2 -translate-y-1/2 cursor-pointer keen-slider__arrow mobile:hidden"
            data-direction="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div
            className="absolute w-10 right-5 top-1/2 -translate-y-1/2 cursor-pointer keen-slider__arrow mobile:hidden"
            data-direction="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Dot Navigation */}
      {showDotNav && (
        <ul className="mt-5 flex justify-center keen-slider__dots">
          {slides.map((slide, idx) => {
            return (
              <li
                className={`rounded-full w-[10px] h-[10px] mx-[2px] cursor-pointer keen-slider__dot ${
                  currentSlide === idx ? "bg-black" : "bg-black/10"
                }`}
                key={slide._key}
              ></li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
