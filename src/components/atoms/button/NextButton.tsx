import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledNextButton = styled(Link)`
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  font-weight: 700;
  font-family: Helvetica, "sans-serif";
  transition: all 0.2s;
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  background: #cfef00;
  border: 1px solid transparent;
  display: flex;
  align-items: center;

  &:hover {
    background: #4326ec;
  }

  & > svg {
    width: 34px;
    margin-left: 10px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover svg {
    transform: translateX(5px);
  }

  &:active {
    transform: scale(0.95);
  }
`;
const pageList = [
  { value: "crud", name: "CRUD with react-query" },
  { value: "designPattern", name: "designPattern" },
  { value: "interactive/intersect", name: "interactive" },
  { value: "interactive/threejs", name: "threejs" },
  { value: "peoplelist", name: "infinite Scroll" },
  { value: "msw", name: "msw and testing" },
  { value: "", name: "go to home" },
];

type NextProps = {
  currPage:number
}

export default function NextButton({currPage}:NextProps) {
  return (
    <StyledNextButton href={`/${pageList[currPage].value}`}>
      <span>{pageList[currPage].name}</span>
      <svg
        width="34"
        height="34"
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="37"
          cy="37"
          r="35.5"
          stroke="black"
          strokeWidth="3"
        ></circle>
        <path
          d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
          fill="black"
        ></path>
      </svg>
    </StyledNextButton>
  );
}
