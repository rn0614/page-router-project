import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:0.5rem;
  border: 0.2rem solid rgba(193, 205, 210, 0.62);
  border-radius: 16px;
  padding: 0.5rem;
  margin: 0.2rem;
  width: 100%;
`;

type BoxProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export default function Box({ children, ...res }: BoxProps) {
  return <StyledBox {...res}>{children}</StyledBox>;
}
