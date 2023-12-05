import React from 'react';

export const MarqueePhotos = () => {
  return (
    <div>
      <div class="marquee-container bg-gray-200 h-64 overflow-hidden relative">
        <div
          class="marquee-content absolute whitespace-nowrap animate-marquee"
          style="animation-duration: 20s; animation-iteration-count: infinite;"
        >
          <img
            src="https://via.placeholder.com/150"
            class="inline-block mr-4"
            alt="Horizontal Image"
          />
          <img
            src="https://via.placeholder.com/100x150"
            class="inline-block mr-4"
            alt="Vertical Image"
          />
          <img
            src="https://via.placeholder.com/200x100"
            class="inline-block mr-4"
            alt="Horizontal Image"
          />
        </div>
      </div>
    </div>
  );
};
