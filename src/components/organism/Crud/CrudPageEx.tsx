import React from "react";
import Box from "../../atoms/box/Box";
import Heading from "../../atoms/heading/Heading";
import Paragraph from "../../atoms/paragraph/Paragraph";

export default function CrudPageEx() {
  return (
    <Box className="explain-page">
      <Heading variant="h3">화면설명</Heading>
      <Paragraph>react-query로 만든 CRUD화면 삭제버튼으로 삭제 가능</Paragraph>
      <Paragraph>pagination으로 분할보기 및 limit구현</Paragraph>
      <Paragraph>
        react-query로 prefetch 구현 / ex) page1 일때 2로 갈것을 예상하여 2번
        데이터까지 가져오는 것
      </Paragraph>
      <Paragraph>화면 줄일 시 세로보기 화면 구현</Paragraph>
      <Paragraph>backend nextjs로 구현하고 db는 mariadb 사용</Paragraph>
      <Paragraph>사진저장은 awsS3로 파일시스템 따로 저장</Paragraph>
      <Paragraph>
        에러 발생시 공통 에러모듈에서 에러 체크 동일하게 toast로 에러여부 송출
      </Paragraph>
    </Box>
  );
}
