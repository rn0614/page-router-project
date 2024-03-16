import React, { ReactNode } from "react";
import styled from "styled-components";
import Heading from "../../atoms/heading/Heading";
import theme from "@/styles/theme";

const StyledArticle = styled.article<StyledArticleProps>`
  width: 100%;
  .article-content {
    display: flex;
    flex-direction: column;
    padding-left: ${({$isIndent})=>$isIndent?"10px":"0"};
    gap: 8px;
  }
`;
type StyledArticleProps = {
  $isIndent?: Boolean;
};

type ArticleProps = {
  headingVariant: keyof typeof theme.HeadingSize;
  title: string;
  children: ReactNode;
} & StyledArticleProps

export default function Article({
  headingVariant,
  title,
  $isIndent=true,
  children,
}: ArticleProps) {
  return (
    <StyledArticle $isIndent={$isIndent}>
      <Heading variant={headingVariant}>{title}</Heading>
      <div className="article-content">{children}</div>
    </StyledArticle>
  );
}
