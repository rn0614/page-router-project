import React, { ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";
import Button from "@/components/atoms/button/Button";
import Text from "@/components/atoms/text/Text";
import Icon from "../../atoms/icon/Icon";

const StyledButton = styled(Button)`
  flex: 0 0 2.5em;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

interface IconButtonProps {
  right?: boolean;
  icon: string;
  iconOnly?: boolean;
  children?: ReactNode;
}

const IconButton = ({
  icon,
  children,
  right,
  iconOnly,
  ...props
}: IconButtonProps) => {
  return (
    <StyledButton onClick={() => {}} {...props}>
      {iconOnly ? (
        <Icon icon={icon} />
      ) : (
        <Wrapper>
          {right || <Icon icon={icon} />}
          {children && <Text>{children}</Text>}
          {right && <Icon icon={icon} />}
        </Wrapper>
      )}
    </StyledButton>
  );
};

export default IconButton;
