import { motion, useScroll, useSpring } from "framer-motion";
import styled, { keyframes } from "styled-components";

const StyledProgressBar = styled.div`
  .progress-bar {
    position: fixed;
    top: 0;
    right: 2px;
    height: 100vh;
    width: 20px;
    background: red;
    transform-origin: top;
    z-index: 100;
    /* animation:grow auto linear;
    animation-timeline: scroll(root block); */
  }

  /* 아직 전 브라우저 지원안함 
  @keyframes grow {
    from{transform:scaleY(0)}
    to{transform:scaleY(1)}
  } */
`;

export default function ScrollYProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <StyledProgressBar>
      <motion.div className="progress-bar" style={{ scaleY }} />
    </StyledProgressBar>
  );
}
