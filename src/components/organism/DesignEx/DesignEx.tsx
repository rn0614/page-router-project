import React from "react";
import RowListTemplate from "../../template/Template2";
import Button from "../../atoms/button/Button";
import theme from "@/styles/theme";
import Heading from "../../atoms/heading/Heading";
import { useState } from "react";
import styled from "styled-components";
import Tooltip from "../../atoms/tooltip/Tooltip";
import IconButton from "../../atoms/button/IconButton";
import Paragraph from "../../atoms/paragraph/Paragraph";
import CardAlbumTable from "../table/CardAlbumTable";
import Box from "../../atoms/box/Box";

export function DesignInfo() {
  return (
    <Box>
      <Heading variant="h2">디자인 패턴</Heading>
      <Paragraph>해당 프로젝트에서는 2가지 기법을 사용했습니다.</Paragraph>
      <Paragraph>
        1.AtomicDesign : 디자인 적인 요소는 재사용 및 통일성을 위해 Atomic
        Design으로 작성하였으며
      </Paragraph>
      <Paragraph>
        2.CustomHooks : CRUD같이 외부 fetch 방식은 CustomHook을 만들어 다시
        사용할 수 있게 하였습니다.
      </Paragraph>
    </Box>
  );
}

type ButtonSize = keyof typeof theme.buttonSize;
const buttonSizeList: ButtonSize[] = Object.keys(
  theme.buttonSize
) as ButtonSize[];

export function ButtonEx() {
  return (
    <RowListTemplate heading="Button">
      {buttonSizeList.map((size) => (
        <Button key={size} $size={size} onClick={() => {}}>
          Button
        </Button>
      ))}
    </RowListTemplate>
  );
}

type HeadingSize = keyof typeof theme.HeadingSize;
const headingList: HeadingSize[] = Object.keys(
  theme.HeadingSize
).reverse() as HeadingSize[];

export function LinkEx() {
  return (
    <RowListTemplate heading="Link">
      {headingList.map((variant) => (
        <Heading key={variant} variant={variant}>
          Heading
        </Heading>
      ))}
    </RowListTemplate>
  );
}

const tooltipList = [
  "right-start",
  "right",
  "right-end",
  "left-start",
  "left",
  "left-end",
  "top-start",
  "top",
  "top-end",
  "bottom-start",
  "bottom",
  "bottom-end",
];

const StyledTooltip = styled.div`
  padding: 2rem 2rem;
  background-color: var(--sub1-color);
`;

export function TooltipEx() {
  const [tooltipState, setTooltipState] = useState(tooltipList[0]);
  return (
    <RowListTemplate heading="Tooltip" $alignItem="center" $gap="5rem">
      <Tooltip message="message" $direction={tooltipState}>
        <StyledTooltip>
          <Heading variant="h4">TooltipTarget</Heading>
        </StyledTooltip>
      </Tooltip>

      <select
        className="tooltip-slection"
        onChange={(e) => setTooltipState(e.target.value)}
      >
        {tooltipList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </RowListTemplate>
  );
}

const iconList = [
  "atomic-design",
  "github",
  "dist",
  "jest",
  "react-router",
  "react",
  "webpack",
];

export function IconButtonEx() {
  return (
    <RowListTemplate heading="IconButton">
      {iconList.map((variant) => (
        <IconButton key={variant} icon={variant} onClick={() => {}} />
      ))}
    </RowListTemplate>
  );
}

export function TableEx() {
  return (
    <div className="table-wrapper">
      <Heading variant="h3">Table(반응형)</Heading>
      <Paragraph>
        Footer의 addComponent를 통해서 CRUD Insert가 동일하게 적용되고 화면
        Table에 10개가 보일 수 있도록 하였습니다.
      </Paragraph>
      <CardAlbumTable />
    </div>
  );
}
