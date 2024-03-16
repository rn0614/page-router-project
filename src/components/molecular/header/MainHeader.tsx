import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import HeaderBuger from "./HeaderBuger";
import Margin from "@/components/atoms/margin/Margin";
import { useRouter } from "next/navigation";

type MobileMeNuOpen = {
  $mobilemenuopen: boolean;
};

const MianHeader = styled.div<MobileMeNuOpen>`
  position: relative;
  // pallete
  background-color: var(--main-color);
  color: white;
  grid-area: header;
  .header-container {
    display: flex;
    justify-content: center;
  }
  .mobile-list {
    display: flex;
    visibility: ${(props) => (props.$mobilemenuopen ? "visible" : "hidden")};
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    z-index: 200;
    a {
      background-color: #666666;
      cursor: pointer;
      text-align: center;
      transition: 1s;
      transform: translateX(
        ${(props) => (props.$mobilemenuopen ? 0 : "-300vw")}
      );
      &:hover {
        color: red;
        background-color: #888888;

        
      }
      @media screen and (min-width :${({ theme }) => theme.breakPoint["mobile"]}) {
          transform: translate(-300vw);
        }
    }
  }
`;
const MainHeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 1080px;
  justify-content: space-between;
  .logo {
    position: relative;
    padding: 0 0.2rem;
    width: 9rem;
    height: 5rem;
  }
  .menu-wrapper {
    display: flex;
    position: relative;
    justify-content: space-between;
    padding-right: 1rem;
    gap: 2rem;
  }
  .menu {
    cursor: pointer;
    color: white;
    position: relative;
    transition: 2ms;
    overflow: hidden;
    transition: transform 300ms;

    @media screen and (max-width :${({ theme }) => theme.breakPoint["mobile"]}) {
      display: none;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -100%;
      width: 100%;
      height: 0.1em;
      background-color: red;
      opacity: 0;
      transition: opacity 300ms, transform 300ms;
    }
    &:hover {
      transform: scale(1.2);

      &:hover::after {
        opacity: 1;
        transform: translateX(100%);
      }
    }
  }
`;

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <MianHeader $mobilemenuopen={mobileMenuOpen}>
      <Margin
        className="header-container"
        $space="sm"
        $side={["left", "right"]}
      >
        <MainHeaderContent>
          <Link className="logo" href="/home">
            <Image src={`/images/koologo3.svg`} priority alt="koologo" fill />
          </Link>
          <div className="menu-wrapper">
            <Link href="/home" className="menu">
              about
            </Link>
            <div onClick={() => router.back()} className="menu">
              back
            </div>
          </div>
          <HeaderBuger
            mobileMenuOpen={mobileMenuOpen}
            onMobileMenuOpen={setMobileMenuOpen}
          />
        </MainHeaderContent>
      </Margin>
      <div className="mobile-list">
        <Link href="/">about</Link>
        <a onClick={() => router.back()}>back</a>
      </div>
    </MianHeader>
  );
}

