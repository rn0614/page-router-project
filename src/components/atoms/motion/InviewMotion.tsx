import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

const StyldeMotion = styled(motion.article)<InviewProps>`
  display: flex;
  flex-direction: column;
  align-items: ${props=>props.isCenter?"center":undefined};
  width: 100%;
  height: 100%;
`;

type InviewProps ={
  children:ReactNode;
  delay?:number;
  isCenter?:boolean;
}

export default function InviewMotion({
  children,
  delay = 0,
  ...res
}: InviewProps) {
  return (
    <StyldeMotion
      initial={{ opacity: 0, y: -10 }}
      transition={{ ease: "easeOut", duration: 0.7, delay: delay }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      {...res}
    >
      {children}
    </StyldeMotion>
  );
}
