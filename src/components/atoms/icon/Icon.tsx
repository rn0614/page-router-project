import React, { useState, useEffect, ComponentPropsWithRef } from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledIcon = styled.span<StyledIconProps>`
  display: inline-block;
  position: relative;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  width: 2em;
  height: 2em;
  box-sizing: border-box;
  ${(props) => `pointer: ${props.onClick ? "cursor" : undefined}`}

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`;

type StyledIconProps = {
  fontSize?: string;
  color?: string;
} & ComponentPropsWithRef<"span">;

type ImageIconProps = {
  icon: string;
} & StyledIconProps;

export default function Icon({ icon, ...res }: ImageIconProps) {
  return (
    <StyledIcon {...res}>
      <Image src={`/images/iconSvg/${icon}.svg`} alt="이미지가 없습니다" fill />
    </StyledIcon>
  );
}
