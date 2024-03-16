import React from "react";
import { styled } from "styled-components";
import Icon from "../icon/Icon";

const StyledEditBtn = styled.button`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: rgb(183, 183, 183);
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

  .edit-svgIcon {
    width: 17px;
    transition-duration: 0.3s;
  }

  .edit-svgIcon path {
    fill: white;
  }
`;

export default function FloatingEditBtn({ icon, onClick, ...res }:any) {
  return (
    <StyledEditBtn onClick={onClick} {...res}>
      <Icon icon={icon} className="edit-svgIcon"/>
    </StyledEditBtn>
  );
}
