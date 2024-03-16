import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "styled-components";
import HoverButton from "@/components/atoms/button/HoverButton";
import { CardAlbum as CardAlbumType } from "@/types/types";
import { useCardAlbum } from "@/hooks/useCardAlbum";
import Image from "next/image";

const StyledClickMotion = styled(motion.div)`
  min-height: 30vh;
  max-width: 1080px;
  width: 90vw;
  align-items: center;
  .motion-wrapper {
    display: flex;
    @media screen and (max-width :${({theme}) => theme.breakPoint["mobile"]}) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default function ClickMotion() {
  const [isVisible, setIsVisible] = useState(true);
  const { albums }: { albums: Array<CardAlbumType> } = useCardAlbum({
    pageNum: 1,
    limit: 5,
    pre:false,
  });
  return (
    <StyledClickMotion>
      <HoverButton
        normalletter={"부드러운 모션 애니메이션"}
        hoverletter={"부드러운 모션 애니메이션"}
        onClick={() => setIsVisible(!isVisible)}
      />
      <AnimatePresence>
        {isVisible && (
          <div className="motion-wrapper">
            {albums.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{
                  rotate: "180deg",
                  scale: 0,
                }}
                animate={{
                  rotate: "360deg",
                  scale: 1,
                  y: [0, 150, -150, -150, 0],
                }}
                exit={{
                  rotate: "0deg",
                  scale: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3 * idx,
                  ease: "backInOut",
                  times: [0, 0.25, 0.5, 0.8, 1],
                }}
                style={{
                  width: 150,
                  height: 150,
                  position: "relative",
                }}
              >
                <Image
                  src={
                    process.env.NEXT_PUBLIC_AWS_S3_SECRET_BUCKET_ADDRESS +
                    item.image
                  }
                  fill
                  priority
                  sizes="(max-width: 150px)"
                  alt="no Image"
                />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
      <div>스크롤시 부드러운 화면생성</div>
    </StyledClickMotion>
  );
}
