import React from "react";
import Article from "../../molecular/article/Article";
import Text from "../../atoms/text/Text";
import Box from "../../atoms/box/Box";

export default function HomeSkillInfo() {
  return (
    <Box className="introduce-content">
      <Box>
        <Article headingVariant="h2" title="경력사항">
          <Text size="lg">현대오토에버 근무(2022.04~ 현재)</Text>
        </Article>
      </Box>
      <Box>
        <Article headingVariant="h2" title="기술스택">
          <Text>front-framework : react, next, jsp</Text>
          <Text>CSS : emotion, styled-component</Text>
          <Text>상태관리 : react-query, recoil, redux</Text>
          <Text>테스팅 : jest(msw)</Text>
          <Text>INTERACTIVE : three.js</Text>
          <Text>back-framework : springboot</Text>
          <Text>DB : oracleDB, mariaDB</Text>
          <Text>디자인 : Figma</Text>
        </Article>
      </Box>
    </Box>
  );
}
