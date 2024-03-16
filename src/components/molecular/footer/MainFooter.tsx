"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MainFooter = styled.div`
  background-color: #d7d7d7;
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Mainfooter() {
  return (
    <MainFooter>
      <div>
        <Link href="https://github.com/rn0614/my-resume">git : https://github.com/rn0614/my-resume (작업기간 : 2023.01.15~)</Link> 
      </div>
    </MainFooter>
  );
}
