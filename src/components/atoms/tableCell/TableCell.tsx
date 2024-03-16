import styled from "styled-components";
import theme from "@/styles/theme";
// prettier-ignore
type TDProps = {
  $col: string;
  $cellKey:number;
};

export const TD = styled.td<TDProps>`
  text-align: center;
  overflow: hidden;
  border-bottom: 1px solid #e1e1e1;
  + td {
    border-left: 1px solid #e1e1e1;
    @media screen and (max-width :${() => theme.breakPoint["mobile"]}) {
      border-left: none;
    }
  }
  @media screen and (max-width :${() => theme.breakPoint["mobile"]}) {
    display: grid;
    grid-template-columns: 12rem 1fr;
    grid-template-rows: minmax(2.3rem, auto);
    text-align: left;
    align-items: center;
    gap: 0.8rem;
    background: linear-gradient(to right, #666, #666 12rem, #fff 12rem);
    &::before {
      text-align: center;
      align-self: center;
      color: white;
    }
    ${(props) => `&:nth-child(${props.$cellKey + 1})::before {
      content: "${props.$col}";
    }`}
  }
`;
export const TH = styled.th`
  text-align: center;
  background-color: gray;
  color: white;
  font-weight: 700;
  + th {
      border-left: 1px solid white;
    }
  @media screen and (max-width :${() => theme.breakPoint["mobile"]}) {
    display: none;
  }
`;

