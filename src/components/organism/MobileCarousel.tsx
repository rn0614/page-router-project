import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  overflow: hidden;
  cursor: grab;
`;

const Image = styled.img`
  width: 100%;
`;

const MobileCarousel = ({ images }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleMouseDown = (e:any) => {
    setStartX(e.clientX);
  };

  const handleMouseMove = (e:any) => {
    if (!startX) return;
    const currentX = e.clientX;
    const difference = startX - currentX;

    if (difference > 30) {
      nextImage();
      setStartX(null);
    } else if (difference < -30) {
      prevImage();
      setStartX(null);
    }
  };

  const handleMouseUp = () => {
    setStartX(null);
  };

  return (
    <CarouselContainer>
      <button onClick={prevImage}>Previous</button>
      <ImageContainer
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        draggable="false"
      >
        <Image src={images[currentIndex]} alt={`Image ${currentIndex}`} sizes='(max-width:50vw)'/>
      </ImageContainer>
      <button onClick={nextImage}>Next</button>
    </CarouselContainer>
  );
};

export default MobileCarousel;