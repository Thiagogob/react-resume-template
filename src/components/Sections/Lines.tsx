// src/components/Sections/Portfolio.tsx

import React, {FC, memo} from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Section from '../Layout/Section';
import {SectionId, linesData} from '../../data/data';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Lines: FC = memo(() => {
  const {title, images} = linesData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostra 3 fotos por vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Section className="bg-neutral-800 py-16" sectionId={SectionId.Lines}>
      <h2 className="text-4xl font-bold text-white text-center mb-10">{title}</h2>
      <div className="mx-auto max-w-screen-xl px-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
});

Lines.displayName = 'Lines';
export default Lines;