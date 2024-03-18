import Template3 from "@/components/template/Template3";
import { MswExInfo, MswExInfo2 } from "@/components/organism/MswEx/MswEx";
import styled from "styled-components";
import MainHeader from "@/components/molecular/header/MainHeader";
import InteractiveFooter from "@/components/molecular/footer/InteractiveFooter";

const StyledWraper = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: 5rem auto 5rem;
  grid-template-areas:
    "header"
    "feed"
    "footer";
`;

const StyledFeed = styled.div`
  grid-area: feed;
  position: relative;
`;
export default function Interactive() {
  return (
    <StyledWraper>
      <MainHeader />
      <StyledFeed>
        <Template3>
          <MswExInfo />
          <MswExInfo2 />
        </Template3>
      </StyledFeed>
      <InteractiveFooter nexPage={6}/>
    </StyledWraper>
  );
}
