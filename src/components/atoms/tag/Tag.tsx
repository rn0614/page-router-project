import React from "react";
import styled from "styled-components";

type Props = {
  tag: string;
};

const TagWrapper = styled.div`
  display: inline-block;
  padding:0 0.5rem;
  color: red;
  background-color: blue;
  border: 0.1rem hotpink solid;
  border-radius: 0.5rem;
  div {
    color: white;
    display: inline;
  }
`;

export default function Tag({ tag }: Props) {
  return (
    <TagWrapper>
      <div>{tag}</div>
    </TagWrapper>
  );
}
