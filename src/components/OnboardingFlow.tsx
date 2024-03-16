import React, { ReactNode } from "react";
import styled from "styled-components";
import Icon from "@/components/atoms/icon/Icon";
import FloatingEditBtn from "@/components/atoms/button/FloatingBtn";

const StyledOnboarding=styled.div`
 position: relative;
 width: fit-content;
`

const StyledPreButton = styled.div`
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
`;
const StyledNextButton = styled.div`
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
`;

export default function OnboardingFlow({
  children,
  currentIndex,
  goToNext,
  goToPrev,
}: {
  children: ReactNode[];
  currentIndex: number;
  goToNext: () => void;
  goToPrev: () => void;
}) {
  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return (
      <StyledOnboarding>
        {React.cloneElement(currentChild)}
        <StyledPreButton>
          <FloatingEditBtn
            icon={"left-arrow"}
            onClick={goToPrev}
          ></FloatingEditBtn>
        </StyledPreButton>
        <StyledNextButton>
          <FloatingEditBtn
            icon={"right-arrow"}
            onClick={goToNext}
          ></FloatingEditBtn>
        </StyledNextButton>
      </StyledOnboarding>
    );
  }

  return <div>NO data</div>;
}
