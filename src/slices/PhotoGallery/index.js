'use client';
import React, { useRef } from 'react';
import { Bounded } from '@/components/Bounded';
import { PrismicNextImage } from '@prismicio/next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';
import Flower from '@/components/Flower';

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

  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="flex justify-center flex-row flex-wrap gap-8 py-6 pl-10"
      >
        <div className="pt-10 pb-4 flex md:flex-row flex-col items-center px-10 gap-12">
          <h1 className="font-body text-[3rem] md:text-left leading-none text-center text-slate-grey">
            {slice.primary.header}
          </h1>
          <div className="flex flex-col md:text-left text-center">
            <p>{slice.primary.desc}</p>
            <p>{slice.primary.desc2}</p>
          </div>
        </div>
        <Swiper
          slidesPerView={3.5}
          breakpoints={{
            // when window width is >= 320px
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
          navigation
          // scrollbar={{ draggable: true }}
          spaceBetween={50}
        >
          <div>
            <SwiperSlide>
              <PrismicNextImage
                field={slice.primary.image1}
                className="rounded-p-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PrismicNextImage
                field={slice.primary.image2}
                className="rounded-p-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PrismicNextImage
                field={slice.primary.image3}
                className="rounded-p-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PrismicNextImage
                field={slice.primary.image4}
                className="rounded-p-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PrismicNextImage
                field={slice.primary.image5}
                className="rounded-p-md"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default PhotoGallery;
