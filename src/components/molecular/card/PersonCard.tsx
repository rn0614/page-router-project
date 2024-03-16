import styled from "styled-components";
import Heading from "../../atoms/heading/Heading";
import List from "../../atoms/list/List";

const StyledLi = styled.div`
  width: 80%;
  margin: 1rem 0;
  border: 4px solid #008223;
  position: relative;
  overflow: hidden;
  background-color: #cfaced;
  &:nth-child(even) {
    background-color: rgba(129, 133, 97, 0.6);
    float: right;
  }
  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border-color: #ff5454;
  }

  .marking {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: 0.8rem;
    color: white;
    background: #ff5454;
    padding: 0.5rem;
    transform: rotateZ(45deg) translateX(2.3rem) translateY(-1rem);
    transform-origin: center;
    width: 8rem;
    text-align: center;
  }
`;

interface Props {
  name: string;
  hairColor: string;
  eyeColor: string;
}

export function Person({ name, hairColor, eyeColor }: Props) {
  return (
    <StyledLi>
      <Heading variant="h3">{name}</Heading>
      <div
        className="marking"
        style={{ display: eyeColor === "blue" ? "absolure" : "none" }}
      >
        blue eyes
      </div>
      <List variant="ul">
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </List>
    </StyledLi>
  );
}
