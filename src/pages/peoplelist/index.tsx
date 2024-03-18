import { InfinitePeople } from "../../components/molecular/people/InfinitePeople";
import NextButton from "@/components/atoms/button/NextButton";
import styled from "styled-components";
import Paragraph from "@/components/atoms/paragraph/Paragraph";
import Template3 from "@/components/template/Template3";
import Article from "@/components/molecular/article/Article";
import Margin from "@/components/atoms/margin/Margin";
import Mainfooter from "@/components/molecular/footer/MainFooter";
import MainHeader from "@/components/molecular/header/MainHeader";
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
const StyledFixed = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
`;

export default function PeoplePage() {
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
          <Template3>
            <Article
              headingVariant="h1"
              title="Infinite SWAPI"
              $isIndent={false}
            >
              <Paragraph>data by swapi.dev</Paragraph>
              <InfinitePeople />
              <StyledFixed>
                <NextButton currPage={5} />
              </StyledFixed>
            </Article>
          </Template3>
        </StyledFeed>
        <Mainfooter />
      </StyledMain>
    </>
  );
}
