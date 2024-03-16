import React, { Component } from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledImgWrapper = styled.div<{ height?: number; width?: number }>`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: auto ${(props) => props.height + "/" + props.width};
  
`;
interface ImgProps {
  src: string;
  className?:string;
  height?: number;
  width?: number;
  sizes?:string;
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
      <RatioResponsiveImage src={src} height={height} width={width} />
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
      <RatioResponsiveImage src={src} height={height} width={width} />
      <p>{children}</p>
    </div>
  );
}

/**
 * RatioResponsiveImage
 * src:이미지경로, alt:대체용어, height:원본이미지 높이, width:원본이미지 너비
 */
export function RatioResponsiveImage({
  src,
  height ,
  width ,
  className,
  alt = "no Image",
  sizes ="(max-width: 100vw)",
  ...res
}: ImgProps) {
  return (
    <StyledImgWrapper className={className} height={height} width={width}>
      <Image sizes={sizes} src={src} fill style={{ objectFit: "cover" }} alt={alt} />
    </StyledImgWrapper>
  );
}
