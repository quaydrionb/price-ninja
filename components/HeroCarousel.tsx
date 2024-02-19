"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgUrl: "/assets/images/headphones.jpg", alt: "headphones" },
  { imgUrl: "/assets/images/camera.jpg", alt: "camera" },
  { imgUrl: "/assets/images/vans.jpg", alt: "shoes" },
  { imgUrl: "/assets/images/keyboard.jpg", alt: "keyboard" },
];

const HeroCarousel = () => {
  return (
    <div className="sm:hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={400}
            height={600}
            className="object-contain rounded-[30px] w-auto"
            key={image.alt}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
