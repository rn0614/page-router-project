import React from "react";
import styled from "styled-components";
import Icon from "../../atoms/icon/Icon";

const IconButtonWrapper = styled.button`
  width: fit-content;
  background-color: white;
  &:hover {
    transition: 0.3s;
    background-color: red;
  }
  &:active {
    background-color: #560202;
  }
`;

interface IconButtonProps {
  icon: string;
  onClick: any;
}

const IconButton = ({ icon, onClick, ...props }: IconButtonProps) => {
  return (
    <IconButtonWrapper>
      <Icon icon={icon} onClick={onClick} {...props} />
    </IconButtonWrapper>
  );
};

export default IconButton;
