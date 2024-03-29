import React from "react";
import { styled } from "styled-components";

const StyledDeleteBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
  text-decoration: none !important;

  .delete-svgIcon {
    width: 1rem;
    transition-duration: 0.3s;
  }

  .delete-svgIcon path {
    fill: white;
  }
`;

export default function FloatingDeleteBtn({ onClick }: any) {
  return (
    <StyledDeleteBtn onClick={onClick}>
      <svg className="delete-svgIcon" viewBox="0 0 512 512">
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
      </svg>
    </StyledDeleteBtn>
  );
}
