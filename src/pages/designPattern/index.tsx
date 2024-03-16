"use client";
import Heading from "@/components/atoms/heading/Heading";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { RatioResponsiveImage } from "@/components/atoms/imgae/RatioResponsiveImage";
import Template3 from "@/components/template/Template3";
import {
  ButtonEx,
  DesignInfo,
  IconButtonEx,
  LinkEx,
  TableEx,
  TooltipEx,
} from "@/components/organism/DesignEx/DesignEx";

export default function DesignPatternPage() {
  return (
    <Template3>
      <DesignInfo />
      <Heading variant="h2" color="--sub1-color">
        1.Atomic Design
      </Heading>
      <ButtonEx />
      <LinkEx />
      <TooltipEx />
      <IconButtonEx />
      <TableEx />

      <Heading variant="h2" color="--sub1-color">
        2.CustomHook
      </Heading>
      <RatioResponsiveImage
        src="/images/customHook.PNG"
        height={943}
        width={139}
      />
    </Template3>
  );
}
