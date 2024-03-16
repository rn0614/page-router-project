import { useCardAlbum } from "@/hooks/useCardAlbum";
import React, { useState } from "react";
import styled from "styled-components";
import { CardAlbum as CardAlbumType } from "@/types/types";
import Image from "next/image";
import Heading from "../atoms/heading/Heading";

const StyledWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.1rem;
  height: 80vh;
  width: 100%;
  .item {
    position: relative;
  }
  .ative {
    transform: scale(1.2);
  }
  @media screen and (max-width :600px) {
    grid-template-areas:
      "active active active active sub0"
      "active active active active sub1"
      "active active active active sub2"
      "active active active active sub3"
      "sub4 sub5 sub6 sub7 sub8";
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    height: 80vmin;
    width: 80vmin;
    .active {
      animation: active-scale-up 0.3s ease-in-out;
      grid-area: active;
      @keyframes active-scale-up {
        0% {
          transform: scale(0.8);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;

export default function MobileInteractive() {
  const { albums }: { albums: Array<CardAlbumType> } = useCardAlbum({
    pageNum: 1,
    limit: 10,
  });
  const [isActive, setIsActive] = useState<number>(0);
  return (
    <div>
      <Heading variant="h1">모바일 화면집중 반응형</Heading>
      <StyledWrapper>
        {albums.map((item, idx) => (
          <div
            key={idx}
            className={`item ${isActive === idx ? "active" : "sub"}`}
            onClick={(e) => setIsActive(idx)}
          >
            <Image
              src={process.env.NEXT_PUBLIC_AWS_S3_SECRET_BUCKET_ADDRESS + item.image}
              fill
              priority
              sizes="(max-width: 600px)"
              alt="no Image"
            />
          </div>
        ))}
      </StyledWrapper>
    </div>
  );
}
