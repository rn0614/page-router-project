import styled from "styled-components";
import theme from "@/styles/theme";
import React, { ReactNode } from "react";

const StyledClassicButton = styled.button<ButtonProps>`
  //위치
  display: flex;
  justify-content: center;
  align-items: center;
  //외형
  border-radius: 10px;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : undefined)};
  background: ${({ $palette, theme }) =>
    theme.palette[$palette || "primary"][0]};
  color: ${({ $palette, theme }) => theme.palette[$palette || "primary"][1]};
  border-color: ${({ theme, $palette }) =>
    theme.palette[$palette || "primary"][0]};
  //기타
  cursor: pointer;

  // font
  font-weight: ${({ theme, fontWeight }) =>
    theme.fontWeight[fontWeight || "medium"]};

  // 크기
  padding: ${({ $size, theme }) =>
    `${theme.buttonSize[$size || "md"][2]} ${
      theme.buttonSize[$size || "md"][3]
    }`};
  font-size: ${({ $size, theme }) => theme.buttonSize[$size || "md"][0]};
  line-height: ${({ $size, theme }) => theme.buttonSize[$size || "md"][1]};

  // 동작
  transition: all 0.3s ease;
  &:hover {
    border-color: ${({ $palette, theme }) =>
      theme.palette[$palette || "primary"][2]};
    background: ${({ $palette, theme }) =>
      theme.palette[$palette || "primary"][2]};
    color: black;
  }

  &:active {
    background: var(--main-color);
  }
`;

type ButtonProps = {
  onClick: any;
  children: ReactNode;
  className?: string;
  $palette?: keyof typeof theme.palette;
  $size?: keyof typeof theme.buttonSize;
  $fullWidth?: boolean;
  $variant?: keyof typeof theme.buttonVariant;
  fontSize?: keyof typeof theme.fontSize;
  fontWeight?: keyof typeof theme.fontWeight;
};

/**
 * @param  width
 * @param  height - padding 위아래
 * @param  fontSize - font크기
 * @param  onClick - 클릭함수
 */
export default function Button({
  onClick,
  children,
  className,
  ...res
}: ButtonProps) {
  return (
    <StyledClassicButton onClick={onClick} className={className} {...res}>
      {children}
    </StyledClassicButton>
  );
}
