import React, { useState, useEffect, useRef } from "react";

const images = [
  "tour1.jpg",
  "tour2.jpg",
  "tour3.jpg",
];

  function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Autoplay every 5s
  useEffect(() => {
    const next = () => setCurrent((prev) => (prev + 1) % images.length);
    timeoutRef.current = setTimeout(next, 5000);

    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Manual controls
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (distance > threshold) nextSlide();
    else if (distance < -threshold) prevSlide();
  };

  return (
    <div
      className="relative w-full min-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg "
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-[20rem] object-cover transition-all duration-500"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ›
      </button>
    </div>
  );
}

export default ImageSlider
