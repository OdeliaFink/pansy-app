'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Bounded } from '@/components/Bounded';
import { PrismicNextImage } from '@prismicio/next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Mousewheel, Virtual } from 'swiper/modules';
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
      <Swiper
        modules={[Navigation, Scrollbar, Mousewheel, Virtual]}
        onSlideChange={handleSlideChange}
        runCallbacksOnInit
        slidesPerView={3.5}
        spaceBetween={50}
        navigation
        scrollbar={{ draggable: true }}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true, thresholdDelta: 50 }}
        breakpoints={{
          320:  { slidesPerView: 1.5, spaceBetween: 24 },
          370:  { slidesPerView: 1.5, spaceBetween: 24 },
          770:  { slidesPerView: 3.5, spaceBetween: 40 },
          1000: { slidesPerView: 3.5, spaceBetween: 50 },
        }}
        className="h-auto"
      >
          <div>
            {slides.map((image, index) => (
              <SwiperSlide key={index}>
                {/* SIZED + ROUNDED WRAPPER → image fills & clips to radius */}
                <div
                  className="relative h-80 md:h-96 w-full overflow-hidden rounded-p-sm"
                  // Uncomment next line if iOS/Safari ever shows square corners:
                  // style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                >
                  <PrismicNextImage field={image} fill className="object-cover" />
                  {index > lastHalfSlideIndex && (
                    <div className="absolute inset-0 bg-black/50" />
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
