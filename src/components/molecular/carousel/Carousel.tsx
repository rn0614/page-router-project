import React, {  useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import Heading from "../../atoms/heading/Heading";

const StyledWrapper = styled(motion.div)`
  .carrousel {
    display: flex;
    gap: 16px;
    padding: 0 16px;
  }
  .carrousel::-webkit-scrollbar {
    display: none;
  }
  .card {
    scroll-snap-align: start;
    border-radius: 30px;
    min-height: 200px;
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
  }
`;
interface Props {
  listData?: Array<any>;
  width?: number;
  height?: number;
}

export default function Carousel({
  listData = ["Map1", "Map2", "Map3", "Map4", "Map5", "Map6", "Map7"],
  width,
  height,
}: Props) {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);
  const totalLength = listData.length * 300 + (listData.length + 1) * 16;

  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const handleResize = useCallback(() => {
    setViewWidth(window.innerWidth);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    console.log("x",x, parseInt(+x/300+''));
    if(x<-175 && x>-350){
      setImgIndex(360-x);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <StyledWrapper
      drag="x"
      dragConstraints={{ right: 0, left: Math.min(viewWidth - totalLength, 0) }}
      style={{
        x: dragX,
      }}
      onDragEnd={onDragEnd}
    >
      <div className="carrousel">
        {listData.map((item, idx) => (
          <article className="card" key={idx}>
            <Heading variant="h3">{item}</Heading>
          </article>
        ))}
      </div>
    </StyledWrapper>
  );
}
