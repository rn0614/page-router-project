import React from "react";
import styled from "styled-components";
import theme from "@/styles/theme";

const StyledHeaderBuger = styled.label`
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  display: none;
  @media screen and (max-width :${()=>theme.breakPoint["mobile"]}) {
    display: block;
  }
  input {
    display: none;
  }
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }
  span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }
  span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }
  input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }
  input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }
  input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }
`;

interface HeaderBuggerProps{
  mobileMenuOpen: boolean;
  onMobileMenuOpen:React.Dispatch<React.SetStateAction<boolean>>;
}


export default function HeaderBuger({
  mobileMenuOpen,
  onMobileMenuOpen,
  ...res
}:HeaderBuggerProps) {
  return (
    <StyledHeaderBuger className="burger" htmlFor="bugger" {...res}>
      <input
        type="checkbox"
        id="bugger"
        checked={mobileMenuOpen}
        onChange={() => onMobileMenuOpen(!mobileMenuOpen)}
      />
      <span></span>
      <span></span>
      <span></span>
    </StyledHeaderBuger>
  );
}
