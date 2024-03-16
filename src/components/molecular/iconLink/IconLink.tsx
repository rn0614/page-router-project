import React, { ReactNode } from "react";
import styled from "styled-components";
import Link from "@/components/atoms/link/Link";
import Text from "@/components/atoms/text/Text";
import Icon from "../../atoms/icon/Icon";

const StyledLink = styled(Link)``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

interface IconLinkProps {
  right?: boolean;
  icon: string;
  children: ReactNode;
  href: any;
}

export default function IconLink({
  icon,
  children,
  href,
  right,
  ...props
}: IconLinkProps) {
  return (
    <StyledLink href={href} {...props}>
      <Wrapper>
        {right || <Icon icon={icon} />}
        {children && <Text>{children}</Text>}
        {right && <Icon icon={icon} />}
      </Wrapper>
    </StyledLink>
  );
}
