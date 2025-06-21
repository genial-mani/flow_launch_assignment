"use client";

import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const slides = [
  {
    image:
      "https://res.cloudinary.com/diumsbsrb/image/upload/v1750519514/Introduction_to_Machine_Learning_with_SciKit_Learn_lgcnpu.png",
  },
  {
    image:
      "https://res.cloudinary.com/diumsbsrb/image/upload/v1748154382/UC-450ccd31-4674-4bec-bfc1-1ab4909891c7_mei3pt.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/diumsbsrb/image/upload/v1748154379/certificate_z4txhn.png",
  },
  {
    image:
      "https://res.cloudinary.com/diumsbsrb/image/upload/v1748154381/certificate2_snpulz.png",
  },
  {
    image:
      "https://res.cloudinary.com/diumsbsrb/image/upload/v1748154383/UC-58074257-633c-4075-9d0f-edeea64a6cf3_owpcck.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/diumsbsrb/image/upload/v1748154380/certificate1_kne8pr.png",
  },
];

export const Certificates = ()=> {
  return (
    <div className="w-full max-w-full h-[70vh] flex items-center justify-center bg-black">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          arrows: true,
          breakpoints:{
            640:{
                arrows: false,
            }
          },
          pagination: true,
        }}
        aria-label="Rick Astley Carousel"
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SplideSlide key={idx}>
            <div className="relative w-full h-[70vh] flex flex-col items-center justify-center text-white">
              <img
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                className="absolute w-full h-full object-contain"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
