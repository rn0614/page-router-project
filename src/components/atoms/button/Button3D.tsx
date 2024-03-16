import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const Styled3DBtn = styled.button`
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  border-width: 0;
  padding: 0 8px 12px;
  min-width: 4rem;
  background: transparent;
  font: inherit;
  cursor: pointer;

  .button-top {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 3;
    padding: 8px 16px;
    transform: translateY(0);
    text-align: center;
    color: #fff;
    text-shadow: 0 -1px rgba(0, 0, 0, 0.25);
    transition-property: transform;
    transition-duration: 0.2s;
    -webkit-user-select: none;
    user-select: none;
  }

  &:active .button-top {
    transform: translateY(6px);
  }

  .button-top::after {
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    background-image: radial-gradient(var(--main-color), var(--sub1-color));
    text-align: center;
    color: #fff;
    box-shadow: inset 0 0 0px 1px rgba(255, 255, 255, 0.2),
      0 1px 2px 1px rgba(255, 255, 255, 0.2);
    transition-property: border-radius, padding, width, transform;
    transition-duration: 0.2s;
  }

  &:active .button-top::after {
    border-radius: 6px;
    padding: 0 2px;
  }

  .button-bottom {
    position: absolute;
    z-index: 2;
    bottom: 4px;
    left: 4px;
    border-radius: 8px / 16px 16px 8px 8px;
    padding-top: 6px;
    width: calc(100% - 8px);
    height: calc(100% - 10px);
    box-sizing: content-box;
    background-color: var(--main-color);
    background-image: radial-gradient(
        4px 8px at 4px calc(100% - 8px),
        rgba(255, 255, 255, 0.25),
        transparent
      ),
      radial-gradient(
        4px 8px at calc(100% - 4px) calc(100% - 8px),
        rgba(255, 255, 255, 0.25),
        transparent
      ),
      radial-gradient(16px at -4px 0, white, transparent),
      radial-gradient(16px at calc(100% + 4px) 0, white, transparent);
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5),
      inset 0 -1px 3px 3px rgba(0, 0, 0, 0.4);
    transition-property: border-radius, padding-top;
    transition-duration: 0.2s;
  }

  &:active .button-bottom {
    border-radius: 10px 10px 8px 8px / 8px;
    padding-top: 0;
  }

  .button-base {
    position: absolute;
    z-index: 0;
    top: 4px;
    left: 0;
    border-radius: 12px;
    width: 100%;
    height: calc(100% - 4px);
    background-color: rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 1px 0 rgba(255, 255, 255, 0.75),
      inset 0 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

interface Button3DProps {
  children: ReactNode;
  onClick:(e:any)=>void;
  className?: string;
}

export default function Button3D({
  className,
  children,
  onClick,
  ...rest
}: Button3DProps): ReactElement {
  return (
    <Styled3DBtn type="button" className={className} onClick={onClick} {...rest}>
      <div className="button-top">{children}</div>
      <div className="button-bottom"></div>
      <div className="button-base"></div>
    </Styled3DBtn>
  );
}