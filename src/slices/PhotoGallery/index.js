'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Bounded } from '@/components/Bounded';
import { PrismicNextImage } from '@prismicio/next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';
import { SwiperNavButtons } from '@/components/SwiperNavButton';

register();
/**
 * @typedef {import("@prismicio/client").Content.PhotoGallerySlice} PhotoGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PhotoGallerySlice>} PhotoGalleryProps
 * @param {PhotoGalleryProps}
 */
{
}

const PhotoGallery = ({ slice }) => {
  const swiperElRef = useRef(null);
  const [lastHalfSlideIndex, setLastHalfSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const slidesInView = Math.floor(
      swiper.width / swiper.slides[0].offsetWidth
    );
    const lastIndexInView = swiper.activeIndex + slidesInView - 1;
    setLastHalfSlideIndex(lastIndexInView);
  };

  useEffect(() => {
    if (slice && slice.primary) {
      const slides = [
        slice.primary.image1,
        slice.primary.image2,
        slice.primary.image3,
        slice.primary.image4,
        slice.primary.image5,
        slice.primary.image6,
        slice.primary.image7,
        slice.primary.image8,
        slice.primary.image9,
        slice.primary.image10,
      ];
      setLastHalfSlideIndex(slides.length - 1); // Set the last card index initially
    }
  }, [slice]);

  const slides = [
    slice.primary.image1,
    slice.primary.image2,
    slice.primary.image3,
    slice.primary.image4,
    slice.primary.image5,
    slice.primary.image6,
    slice.primary.image7,
    slice.primary.image8,
    slice.primary.image9,
    slice.primary.image10,
  ];

  return (
    <div>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="flex justify-center flex-row flex-wrap gap-8 py-6 md:px-[2rem] pl-[1rem] overflow-x-hidden"
      >
        {/* <div className="pt-10 pb-4 flex md:flex-row flex-col items-center lg:px-[4.5rem] px-2 gap-12">
          <h1 className="font-body text-[3rem] text-left leading-none text-mossy-green font-display">
            {slice.primary.header}
          </h1>
          <div className="flex flex-col text-left">
            <p>{slice.primary.desc}</p>
            <p>{slice.primary.desc2}</p>
          </div>
        </div> */}
        <Swiper
          onSlideChange={handleSlideChange}
          runCallbacksOnInit={true}
          slidesPerView={3.5}
          showsButtons={false}
          onSwiper={(swiper) => console.log(swiper)}
          scrollbar={true}
          mousewheel={true}
          // pagination={{
          //   clickable: true,
          //   renderBullet: (index, className) => {
          //     return `<span class="${className}" style="background-color: #737F51;"></span>`;
          //   },
          // }}
          breakpoints={{
            370: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },
            770: {
              slidesPerView: 3.5,
            },
            1000: {
              slidesPerView: 3.5,
            },
          }}
          spaceBetween={50}
          className="xl:min-h-[36rem] lg:min-h-[26rem] md:min-h-[44rem]  min-h-[25rem]"
        >
          <div>
            {slides.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative ${
                    index > lastHalfSlideIndex ? 'opacity-40' : ''
                  }`}
                >
                  <PrismicNextImage field={image} className="rounded-p-sm" />
                  {/* Render overlay only for half-visible cards */}
                  {index > lastHalfSlideIndex && (
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </div>
          <SwiperNavButtons />
        </Swiper>
      </section>
    </div>
  );
};

export default PhotoGallery;
