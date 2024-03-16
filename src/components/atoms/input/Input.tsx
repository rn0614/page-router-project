import React from "react";
import theme from "@/styles/theme";
import styled from "styled-components";

// prettier-ignore
const InputComponent = styled((props: InputProps) =>React.createElement(`${props.tag||'input'}`, props))`
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  border-radius: 2px;

  &[type="checkbox"],
  &[type="radio"] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`;

interface InputProps {
  tag?: string;
  type?: string;
}

export default function Input({
  tag = "input",
  type = "text",
  ...res
}: InputProps) {
  return <InputComponent tag={tag} type={type} {...res} />;
}
