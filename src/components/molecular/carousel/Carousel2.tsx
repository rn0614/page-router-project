import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";

// const imgs = [
//   "/imgs/nature/1.jpg",
//   "/imgs/nature/2.jpg",
//   "/imgs/nature/3.jpg",
//   "/imgs/nature/4.jpg",
//   "/imgs/nature/5.jpg",
// ];

const ONE_SECOND = 1000;
//const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 30;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const StyledWrapper = styled(motion.div)`
  .carrousel {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding-left: 8px;
  }
  .carrousel::-webkit-scrollbar {
    display: none;
  }
  .card {
    scroll-snap-align: start;
    border-radius: 30px;
    min-height: 200px;
    min-width: calc(100% - 8px);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }
`;

const StyledDotList = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  gap: 2px;
  height: 100px;
  .dot {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: rgba(64, 64, 64, 0.5);
    &.active {
      background-color: rgba(0, 0, 0, 1);
    }
  }
`;


export const SwipeCarousel = ({ imgs }:any) => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  // 자동넘김
  // useEffect(() => {
  //   const intervalRef = setInterval(() => {
  //     const x = dragX.get();
  //     if (x === 0) {
  //       setImgIndex((pv) => {
  //         if (pv === imgs.length - 1) {
  //           return 0;
  //         }
  //         return pv + 1;
  //       });
  //     }
  //   }, AUTO_DELAY);
  //   return () => clearInterval(intervalRef);
  // }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <StyledWrapper>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="carrousel"
      >
        {imgs.map((item:any, idx:number) => (
          <div
            className="card"
            key={idx}
            style={{
              height: "300px",
              backgroundImage: `url(${
                process.env.NEXT_PUBLIC_AWS_S3_SECRET_BUCKET_ADDRESS +
                item.image
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize:" cover"
            }}
          ></div>
        ))}
      </motion.div>

      <StyledDotList>
        {imgs.map((_:any, idx:number) => (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`dot ${idx === imgIndex ? "active" : undefined}`}
          />
        ))}
      </StyledDotList>
    </StyledWrapper>
  );
};
