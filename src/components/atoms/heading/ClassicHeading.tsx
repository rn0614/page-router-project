import React from "react";
import styled from "styled-components";

const StyledHeadingH1 = styled.h1`
  color: #212121;
  font-family: "Nunito Sans";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.1rem; /* 1.8rem */
  @media screen and (min-width :640px) {
    color: red;
    font-size: 3rem;
    line-height: 4.6rem; /* 3.3rem */
  }
  @media screen and (min-width :1280px) {
    color: blue;
    font-size: 3.5rem;
    line-height: 5rem; /* 3.85rem */
  }
`;

const StyledHeadingH2 = styled.h2`
  color: #212121;
  font-family: "Nunito Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.1rem; /* 1.8rem */
  @media screen and (min-width :640px) {
    color: red;
    font-size: 2rem;
    line-height: 4.6rem; /* 3.3rem */
  }
  @media screen and (min-width :1280px) {
    color: blue;
    font-size: 3rem;
    line-height: 5rem; /* 3.85rem */
  }
`;

const StyledHeadingH3 = styled.h3`
  color: #212121;
  font-family: "Nunito Sans";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.1rem; /* 1.8rem */
  @media screen and (min-width :640px) {
    color: red;
    font-size: 1.5rem;
    line-height: 4.6rem; /* 3.3rem */
  }
  @media screen and (min-width :1280px) {
    color: blue;
    font-size: 2rem;
    line-height: 5rem; /* 3.85rem */
  }
`;

const StyledHeadingH4 = styled.h4`
  color: #212121;
  font-family: "Nunito Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.1rem; /* 1.8rem */
  @media screen and (min-width :640px) {
    color: red;
    font-size: 1.125rem;
    line-height: 4.6rem; /* 3.3rem */
  }
  @media screen and (min-width :1280px) {
    color: blue;
    font-size: 1.5rem;
    line-height: 5rem; /* 3.85rem */
  }
`;

interface Props {
  variant: string;
  children: string;
}

export default function Heading({ variant, children }: Props) {
  switch (variant) {
    case "h1":
      return <StyledHeadingH1>{children}</StyledHeadingH1>;
    case "h2":
      return <StyledHeadingH2>{children}</StyledHeadingH2>;
    case "h3":
      return <StyledHeadingH3>{children}</StyledHeadingH3>;
    default:
      return <StyledHeadingH4>{children}</StyledHeadingH4>;
  }
}
