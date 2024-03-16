import { getDetailCardAlbumFetch } from "@/hooks/useCardAlbum";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/molecular/modal/RegisterForm";
import { createPortal } from "react-dom";
import Button3D from "@/components/atoms/button/Button3D";
import CrudFooter from "@/components/molecular/footer/CrudFooter";
import { GetServerSidePropsContext } from "next";

const StyledDetailCard = styled.div`
  display: flex;
  grid-area: feed;
  flex-direction: column;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  .image-wrapper {
    position: relative;
    height: 100%;
    aspect-ratio: 1/1;
    min-height: 20vh;
    max-height: 60vh;
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;

type Props = {
  targetAlbum: any;
};

export default function CardDetailPage({ targetAlbum }: Props) {
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
  const router = useRouter();
  return (
    <>
      <StyledDetailCard>
        <h2>Title : {targetAlbum.title}</h2>
        <div className="image-wrapper">
          <Image
            src={
              process.env.NEXT_PUBLIC_AWS_S3_SECRET_BUCKET_ADDRESS +
              targetAlbum.image
            }
            fill
            alt="no Image"
            style={{ objectFit: "unset" }}
          />
        </div>
        <p>description : {targetAlbum.description}</p>

        <div className="button-wrapper">
          <Button3D onClick={openModal}>update</Button3D>
          <Button3D onClick={() => router.back()}>Back</Button3D>
        </div>

        {modalIsOpen && portalElement
          ? createPortal(
              <RegisterForm
                id={targetAlbum.id}
                image={targetAlbum.image}
                title={targetAlbum.title}
                description={targetAlbum.description}
                type="upd"
                closeModal={closeModal}
              />,
              portalElement
            )
          : null}
      </StyledDetailCard>
      <CrudFooter />
    </>
  );
}

// 이 함수는 서버에서 실행되어 페이지의 초기 props를 결정합니다.
export async function getServerSideProps(context: any) {
  const cardId = context.query.cardId as string;
  // 여기에서 fetchCardAlbums은 서버에서 데이터를 가져오는 함수입니다.
  // 실제 구현에서는 API 호출 또는 데이터베이스 조회 로직이 위치합니다.
  const albums = await getDetailCardAlbumFetch(cardId);
  return {
    props: {
      targetAlbum: albums[0],
    },
  };
}
