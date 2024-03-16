import React from "react";
import InteractCar from "@/components/three/InteractCar";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Button3D from "@/components/atoms/button/Button3D";
import Heading from "@/components/atoms/heading/Heading";
import MovingUpdown from "@/components/atoms/motion/MovingUpdown";
import Margin from "@/components/atoms/margin/Margin";

type Props = {
  $color: string;
};

const StyledCanvas = styled.div<Props>`
  top: 0px;
  left: 0px;
  height: calc(100vh - 10rem);
  color: rgb(255, 255, 255);
  width: 100vw;

  .floating-view {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
    top: 0px;
    left: 0px;
    .moving-downarrow {
      margin-top: 2rem;
      z-index: 200;
      color: ${(props) => props.$color};
    }
  }
`;

export default function ColorChangeCar() {
  const [carColor, setCarColor] = useState("white");
  const colorHandler = (color: string) => {
    setCarColor(color);
  };
  return (
    <StyledCanvas $color={carColor}>
      <Canvas
        className="canvas"
        shadows
        camera={{
          position: [5, 5, 5],
        }}
      >
        <color attach="background" args={["gray"]} />
        {/* <axesHelper args={[6]} /> */}
        <gridHelper args={[3, 3]} />
        <InteractCar color={carColor}></InteractCar>
      </Canvas>
      <div className="floating-view">
        <section>
          <Margin $space="sm">
            <MovingUpdown>
              <Heading variant="h2">
                차의 원하는 부분을 클릭하여 색을 바꿔보세요
              </Heading>
            </MovingUpdown>
          </Margin>
          <Button3D
            className={carColor === "white" ? "active" : ""}
            onClick={(e) => colorHandler("white")}
          >
            default
          </Button3D>
          <Button3D
            className={carColor === "red" ? "active" : ""}
            onClick={(e) => colorHandler("red")}
          >
            red
          </Button3D>
          <Button3D
            className={carColor === "blue" ? "active" : ""}
            onClick={(e) => colorHandler("blue")}
          >
            blue
          </Button3D>
          <Button3D
            className={carColor === "green" ? "active" : ""}
            onClick={(e) => colorHandler("green")}
          >
            green
          </Button3D>
        </section>
      </div>
    </StyledCanvas>
  );
}
