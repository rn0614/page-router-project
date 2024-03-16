"use client";
import React from "react";
import Template1 from "@/components/template/Template1";
import PhotoMovetoMouse from "@/components/atoms/motion/PhotoMovetoMouse";
import InviewMotion from "@/components/atoms/motion/InviewMotion";
import HomeProjectList from "@/components/organism/HomeProject/HomeProjectList";
import HomeSkillInfo from "@/components/organism/HomeProject/HomeSkillInfo";

const ReftComp = () => {
  return (
    <InviewMotion>
      <PhotoMovetoMouse></PhotoMovetoMouse>
    </InviewMotion>
  );
};
const RightComp = () => {
  return (
    <InviewMotion delay={0.2}>
      <HomeSkillInfo />
    </InviewMotion>
  );
};
const BottomComp = () => {
  return (
    <InviewMotion delay={0.2}>
      <HomeProjectList />
    </InviewMotion>
  );
};

export default function MainHome() {
  return (
    <Template1
      left={ReftComp}
      right={RightComp}
      bottom={BottomComp}
    ></Template1>
  );
}
