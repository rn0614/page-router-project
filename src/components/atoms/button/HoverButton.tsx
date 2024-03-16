import React from "react";
import styled from "styled-components";

const StyledHoverButton = styled.div`
  position: relative;
  width: 200px;
  height: 47px;
  .button-icon {
    display: flex;
    border: 3px #fff solid;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .cube {
    transition: all 0.4s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .button-icon:hover .cube {
    transform: rotateX(90deg);
  }

  .side {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    font-size: 0.8em;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: bold;
  }

  .top {
    background: var(--main-color);
    color: #fff;
    transform: rotateX(-90deg) translate3d(0, 0, 2em);
  }

  .front {
    background: #222229;
    color: #fff;
    transform: translate3d(0, 0, 1em);
  }
`;

interface hoverProps {
  normalletter: string;
  hoverletter: string;
  onClick: () => void;
}

export default function HoverButton({
  normalletter,
  hoverletter,
  onClick,
  ...res
}: hoverProps) {
  return (
    <StyledHoverButton onClick={onClick} {...res}>
      <div className="button-icon">
        <div className="cube">
          <span className="side front">{normalletter}</span>
          <span className="side top">{hoverletter}</span>
        </div>
      </div>
    </StyledHoverButton>
  );
}
