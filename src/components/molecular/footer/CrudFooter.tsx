"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import RegisterForm from "@/components/molecular/modal/RegisterForm";
import { createPortal } from "react-dom";
import { queryErrorHandler } from "@/react-query/queryClient";
import NextButton from "@/components/atoms/button/NextButton";
import Button from "@/components/atoms/button/Button";

const MainFooter = styled.div`
  background-color: #d7d7d7;
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  .button {
    background-color: var(--sub3-color);
    border-radius: 4px;
    padding: 2px;
    border: 2px solid black;
    transition: 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default function CrudFooter({ type = "ins", ...res }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("portal"));
  }, [modalIsOpen]);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <MainFooter>
      <Button $size="xs" onClick={() => openModal()}>
        {type === "ins" ? "add" : "update"} Content
      </Button>
      <Button $size="xs" onClick={queryErrorHandler}>
        error make
      </Button>
      <NextButton currPage={1}/>
      {modalIsOpen && portalElement
        ? createPortal(
            <RegisterForm type={type} closeModal={closeModal} {...res} />,
            portalElement
          )
        : null}
    </MainFooter>
  );
}
