import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledMovingUpdown = styled.div`
  animation: up-down 1.4s infinite ease-in-out alternate;
  @keyframes up-down {
    from {
      transform: translatey(-20px);
    }
    to {
      transform: translatey(0px);
    }
  }
`;

type MovingUPdownProps = {
  children: ReactNode;
};

export default function MovingUpdown({ children }: MovingUPdownProps) {
  return <StyledMovingUpdown>{children}</StyledMovingUpdown>;
}
