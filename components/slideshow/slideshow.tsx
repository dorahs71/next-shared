'use client';

import styles from './slideshow.module.css';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

export interface SlideShowImage {
  image: StaticImageData;
  alt: string;
}

export default function SlideShow({ images }: { images: SlideShowImage[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? styles.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
