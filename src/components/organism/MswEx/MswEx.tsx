import React from "react";
import Article from "../../molecular/article/Article";
import Paragraph from "../../atoms/paragraph/Paragraph";
import Heading from "../../atoms/heading/Heading";
import { RatioResponsiveImage, ImageWithDescription } from "../../atoms/imgae/RatioResponsiveImage";
import styled from "styled-components";

export function MswExInfo() {
  return (
    <Article headingVariant="h2" title={"MSW(MOCK SERVICE WORKER)란"}>
      <Paragraph>
        프론트에서 백엔드로 보내는 요청을 가로채서 프론트 자체적으로
        모의응답(mocked response)를 보내주는 api라이브러리
      </Paragraph>
      <Paragraph>
        백엔드에서 보내주는 데이터가 없더라도 프론트 자체적으로 테스트 가능
      </Paragraph>
      <div>
        <Heading variant="h3">이점1</Heading>
        <Paragraph>
          백엔드 API개발이 늦어져서 발생하는 Front 작업을 빨리 시작할 수 있도록
          FE에서 수신측 API데이터 형식에 맞춰 가상의 데이터를 생성해서받는 방식
        </Paragraph>
        <Heading variant="h3">이점2</Heading>
        <Paragraph>
          테스팅 라이브러리 도입가능 테스팅 코드를 통해 이후 운영 관리하는
          개발자가 코드의 의도를 예측할 수 있게함.
        </Paragraph>
      </div>
    </Article>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
`;

export function MswExInfo2() {
  return (
    <>
      <ImageWithDescription
        src="/images/mswdescriptionadd.jpg"
        height={718}
        width={650}
        sizes="(max-width: 50vw)"
      >
        그림과 같이 분석/기획이후에 추가적인 변경이 없고 시간이 딱딱 맞으면
        좋지만 실제로 프로젝트를 진행할 때는 모든 것이 동시에 이뤄진다. 이
        상황에서 Backend에서 api가 나오지 않았을 때 프론트를 미리 개발하기
        위해서 msw을 사용한다
      </ImageWithDescription>
      <RatioResponsiveImage
        src="/images/mswdevelop.jpg"
        height={700}
        width={458}
        sizes="(max-width: 50vw)"
      />
      <Heading variant="h2">MSW비교</Heading>
      <StyledWrapper>
        <RatioResponsiveImage
          src="/images/msw미적용시.PNG"
          height={481}
          width={645}
          sizes="(max-width: 50vw)"
        />
        <RatioResponsiveImage
          src="/images/msw적용시.PNG"
          height={481}
          width={645}
          sizes="(max-width: 50vw)"
        />
      </StyledWrapper>
      <Paragraph>
        MSW적용시 실제 데이터를 가져오지 않고 개발 시 가상으로 만든 데이터를
        가져옴
      </Paragraph>
    </>
  );
}
