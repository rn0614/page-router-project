import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledImgWrapper = styled.div<{ height?: number; width?: number }>`
  position: relative;
  width: ${props=>props.width}px;
  height: ${props=>props.height}px;
`;
interface ImgProps {
  src: string;
  height: number;
  width: number;
  children?: React.ReactNode;
  alt?: string;
}

export function ImageWithLabel({
  src,
  height,
  width,
  children,
  ...res
}: ImgProps) {
  return (
    <div>
      <label>{children}</label>
      <StrictImage src={src} height={height} width={width} />
    </div>
  );
}

export function ImageWithDescription({
  src,
  height,
  width,
  children,
  ...res
}: ImgProps) {
  return (
    <div>
      <StrictImage src={src} height={height} width={width} />
      <p>{children}</p>
    </div>
  );
}

/**
 * props
 * src:이미지경로, alt:대체용어, height:원본이미지 높이, width:원본이미지 너비
 */
export function StrictImage({
  src,
  height = 100,
  width = 100,
  alt = "no Image",
  ...res
}: ImgProps) {
  return (
    <StyledImgWrapper height={height} width={width} {...res}>
      <Image src={src} fill style={{ objectFit: "cover" }} alt={alt} sizes="(max-width:50vw)" />
    </StyledImgWrapper>
  );
}
