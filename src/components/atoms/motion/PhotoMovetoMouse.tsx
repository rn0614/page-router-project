import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

type MovingIntensity = {
  $movex: number;
  $movey: number;
};

const PhotoWrapper = styled.div<MovingIntensity>`
  display: block;
  padding: 2rem;
  transition: 1s;
  width: 100%;
  height: auto;
  .image-hidden-wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 100%;
    .image-wrapper {
      position: relative;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      transform: translate(-50%, -50%);
    }
    &:hover {
      border: 2px solid red;

      .image-wrapper {
        transition: 1s;
        transform: translateX(calc(${(props) => props.$movex}rem - 50%))
          translateY(calc(${(props) => props.$movey}rem - 50%)) scale(1.2);
      }
    }
  }
`;

export default function PhotoMovetoMouse() {
  const [coords, setCoords] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      const target = event.target as HTMLInputElement;
      setCoords({
        x: event.offsetX,
        y: event.offsetY,
        width: target.width,
        height: target.height,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  return (
    <PhotoWrapper
      $movex={-(coords.x - coords.width / 2) / 30}
      $movey={-(coords.y - coords.height / 2) / 30}
    >
      <div className="image-hidden-wrapper">
        <div className="image-wrapper">
          <Image src="/images/coding.png" priority alt="koologo" sizes="(max-width: 50vw)" fill />
        </div>
      </div>
    </PhotoWrapper>
  );
}
