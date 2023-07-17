'use client'

import React, { useState } from "react";

const Carousel = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = ["https://res.cloudinary.com/dreso9ye9/image/upload/v1688008440/Captura_de_pantalla_19_ixytrn.png", "https://res.cloudinary.com/dreso9ye9/image/upload/v1687833548/ShoppingCart_zqy7c9.png", "https://res.cloudinary.com/dreso9ye9/image/upload/v1687830277/TeslaLanding_tv73co.png"]

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  

  return (
    <div className="relative">
      <img
        src={photos[currentPhotoIndex]}
        alt="Carousel"
        className="w-[100px] h-[80px]"
      />
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          className="text-white bg-gray-500 hover:bg-gray-700 p-2 rounded-full"
          onClick={handlePrevPhoto}
        >
          Anterior
        </button>
        <button
          className="text-white bg-gray-500 hover:bg-gray-700 p-2 rounded-full"
          onClick={handleNextPhoto}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Carousel;