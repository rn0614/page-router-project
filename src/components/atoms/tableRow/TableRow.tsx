import { ReactNode } from "react";
import styled from "styled-components";
import theme from "@/styles/theme";

const StyledTableRow = styled.tr<TableRowProps>`
  padding: 1rem 0;
  background-color: ${(props) => props.color};
  @media screen and (max-width :${() => theme.breakPoint["mobile"]}) {
    display: block;
  }
`;

interface TableRowProps {
  color?: string;
  children: ReactNode;
}

export default function TableRow({ children, ...res }: TableRowProps) {
  return <StyledTableRow {...res}>{children}</StyledTableRow>;
}
