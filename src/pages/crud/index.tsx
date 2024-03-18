import Template3 from "@/components/template/Template3";
import CrudCardAlbum from "@/components/organism/Crud/CrudCardAlbum";
import CrudPageEx from "@/components/organism/Crud/CrudPageEx";
import InviewMotion from "@/components/atoms/motion/InviewMotion";
import styled from "styled-components";
import MainHeader from "@/components/molecular/header/MainHeader";
import CrudFooter from "@/components/molecular/footer/CrudFooter";
import Head from "next/head";

const StyledWraper = styled.main`
  display: grid;
  width: 100%;
  grid-template-rows: 5rem auto 4rem;
  grid-template-areas:
    "header"
    "feed"
    "footer";
`;

export default function CrudPage() {
  return (
    <>
      <Head>
        <title>{`Koo's portfolio`}</title>
        <meta name="description" content={"CRUD화면"} />
      </Head>
      <StyledWraper>
        <MainHeader />
        <Template3>
          <CrudCardAlbum />
          <InviewMotion>
            <CrudPageEx />
          </InviewMotion>
        </Template3>
        <CrudFooter nextPage={1}/>
      </StyledWraper>
    </>
  );
}
