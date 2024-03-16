import styled from "styled-components";

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: gray;
`;

interface BackDropType{
  closeModal: () => void;
};

export default function Backdrop({ closeModal }: BackDropType) {
  return (
    <StyledBackdrop className="backdrop" onClick={closeModal}></StyledBackdrop>
  );
}
