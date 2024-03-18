import Template1 from "@/components/template/Template1";
import PhotoMovetoMouse from "@/components/atoms/motion/PhotoMovetoMouse";
import InviewMotion from "@/components/atoms/motion/InviewMotion";
import HomeProjectList from "@/components/organism/HomeProject/HomeProjectList";
import HomeSkillInfo from "@/components/organism/HomeProject/HomeSkillInfo";
import Margin from "@/components/atoms/margin/Margin";
import Mainfooter from "@/components/molecular/footer/MainFooter";
import MainHeader from "@/components/molecular/header/MainHeader";
import styled from "styled-components";
import Head from "next/head";

const StyledMain = styled.main`
  display: grid;
  height: 100vh;
  grid-template-areas: "header" "feed" "footer";
  grid-template-rows: 5rem auto 5rem;
`;
const StyledFeed = styled(Margin)`
  grid-area: feed;
  position: relative;
`;
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
    <>
      <Head>
        <title>{`Koo's portfolio`}</title>
        <meta
          name="description"
          content={"구상모 front-end portfolio 사이트"}
        />
      </Head>
      <StyledMain>
        <MainHeader />
        <StyledFeed $space="sm">
          <Template1
            left={ReftComp}
            right={RightComp}
            bottom={BottomComp}
          ></Template1>
        </StyledFeed>
        <Mainfooter />
      </StyledMain>
    </>
  );
}
