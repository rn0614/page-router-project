//import Drag from "@/components/organism/Drag";
import ClickMotion from "@/components/organism/ClickMotion";
import MobileInteractive from "@/components/organism/MobileInteractive";
import InviewMotion from "@/components/atoms/motion/InviewMotion";
import ScrollYProgress from "@/components/organism/ScrollYProgress";
import Heading from "@/components/atoms/heading/Heading";
import Text from "@/components/atoms/text/Text";
import OnboardingFlowSec from "@/components/organism/onboardingFlow/OnboardingFlow";
import CarouselEx from "@/components/organism/carousel/CarouselEx";
import Template3 from "@/components/template/Template3";
import Box from "@/components/atoms/box/Box";
import React from "react";
import styled from "styled-components";
import MainHeader from "@/components/molecular/header/MainHeader";
import InteractiveFooter from "@/components/molecular/footer/InteractiveFooter";
import MobileCarousel from "@/components/MobileCarousel";

const StyledWraper = styled.main`
  display: grid;
  height: 100%;
  overflow-x: hidden;
  grid-template-rows: 5rem auto 5rem;
  grid-template-areas:
    "header"
    "feed"
    "footer";
`;

const StyledFeed = styled.div`
  position: relative;
  grid-area: feed;
  margin: 0 auto;
`;

export default function Intersect() {
  return (
    <StyledWraper>
      <MainHeader />
      <StyledFeed>
        <Template3>
          <Heading variant="h1">반응형 화면</Heading>
          <InviewMotion>
            <Box>
              {/* <Drag /> */}
              <div>
                <Heading variant="h3">drag-drop화면</Heading>
                <Text size="base">
                  드래그 앤 드롭으로 화면 내부 박스 이동가능
                </Text>
                <Text size="base">
                  로컬저장소를 이용하여 개인별로 상태저장가능
                </Text>
                <Text size="base">reset버튼으로 화면초기화</Text>
              </div>
            </Box>
          </InviewMotion>
          <InviewMotion>
            <Box>
              <ClickMotion />
              <div>
                <h3>Click화면</h3>
                <p>집중화된 customHook으로 쉽게 데이터를 가져와 쓸 수 있음</p>
              </div>
            </Box>
          </InviewMotion>
          <InviewMotion>
            <Box>
              <MobileInteractive />
            </Box>
          </InviewMotion>
          <InviewMotion isCenter={true}>
            <Box>
              <OnboardingFlowSec />
              <CarouselEx />
            </Box>
          </InviewMotion>
          <MobileCarousel/>
          <ScrollYProgress />
        </Template3>
      </StyledFeed>
      <InteractiveFooter nexPage={4}/>
    </StyledWraper>
  );
}
