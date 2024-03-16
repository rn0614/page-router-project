import React, { ReactNode } from "react";
import styled from "styled-components";
import Label from "@/components/atoms/label/Label";
import Input from "@/components/atoms/input/Input";

const Wrapper = styled.div`
  margin-bottom: 1rem;
  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 0.5rem;
  }
  label {
    vertical-align: middle;
  }
`;

interface FieldProps {
  error: ReactNode;
  name: string;
  invalid: boolean;
  label: string;
  type: string;
}

export default function Field({
  error,
  name,
  invalid,
  label,
  type,
  ...res
}: FieldProps) {
  const inputProps = {
    id: label, name, type, invalid, 'aria-describedby': `${name}Error`, ...res,
  }
  const renderInputFirst = type === 'checkbox' || type === 'radio'
  return (
    <Wrapper>
      {renderInputFirst && <Input {...inputProps} />}
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      {renderInputFirst || <Input {...inputProps} />}
      {invalid && error
        && (
        <div id={`${name}Error`} role="alert">
          {error}
        </div>
        )
      }
    </Wrapper>
  )
}
