import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const tooltip = keyframes`
  0% { opacity: 0; }
  40% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 1;}
`;

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  &:hover > .tooltip,
  &:active > .tooltip {
    animation: ${tooltip} 0.8s 0.3s ease-in forwards;
    visibility: visible;
  }
`;

const Content = styled.div<TooltipProps>`
  visibility: hidden;
  display: flex;
  opacity: 0;
  position: absolute;
  z-index: 200;
  color:white;
  background-color: var(--main-color);
  padding:0.5rem 0.5rem;
  justify-content: ${(props) => props.$align};
  align-items: ${(props) => props.$align};
  ${(props)=>{
    switch(props.$direction){
      case 'right-start': return `transform: translate(100%, 0); top:0; right:0;`
      case 'right': return `transform: translate(100%, -50%); top:50%; right:0;`
      case 'right-end': return `transform: translate(100%, 0); bottom:0; right:0;`
      case 'left-start': return `transform: translate(-100%, 0); top:0; left:0;`
      case 'left': return `transform: translate(-100%, -50%); top:50%; left:0;`
      case 'left-end': return `transform: translate(-100%, 0); bottom:0; left:0;`
      case 'top-start': return `transform: translate(0, -100%); top:0; left:0;`
      case 'top': return `transform: translate(-50%, -100%); top:0; left:50%;`
      case 'top-end': return `transform: translate(0, -100%); top:0; right:0;`
      case 'bottom-start': return `transform: translate(0, 100%); bottom:0; left:0;`
      case 'bottom': return `transform: translate(-50%, 100%); bottom:0; left:50%;`
      case 'bottom-end': return `transform: translate(0, 100%); bottom:0; right:0;`
    }
  }};
`;

interface TooltipProps {
  children: ReactNode;
  $direction?: string;
  $palette?: string;
  $align?: string;
  message?: ReactNode;
}

export default function Tooltip({
  children,
  $direction='right',
  message,
  ...res
}: TooltipProps) {
  return (
    <Container>
      {children}
      <Content className="tooltip" $direction={$direction} {...res}>
        {message}
      </Content>
    </Container>
  );
}
