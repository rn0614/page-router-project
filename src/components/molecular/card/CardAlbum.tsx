"use client";
import { useDelCardAlbum } from "@/hooks/useCardAlbum";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";
import FloatingDeleteBtn from "@/components/atoms/button/FloatingDeleteBtn";
import Heading from "@/components/atoms/heading/Heading";
import Text from "@/components/atoms/text/Text";
import { RatioResponsiveImage } from "@/components/atoms/imgae/RatioResponsiveImage";

const StyledCardAlbum = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #d1d1d1;
  padding: 0.5rem;
  border-radius: 6px;
  position: relative;
  box-shadow: 1px 1px 4px #555555;
  border: 2px rgba(0, 0, 0, 0) solid;
  transition: 1s;
  @media screen and (max-width :600px) {
    flex-direction: row;
  }
  .mobile {
    width: 100%;
    flex: 2;
  }

  .card-image {
    position: relative;
    width: 100%;
    height: 100%;
    transition: 1s;
    background-color: rgb(236, 236, 236);
  }

  .image-container {
    overflow: hidden;
    position: relative;
    flex: 1;
    width: 100%;
    min-height: 100px;
  }


  .category {
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 600;
    color: rgb(63, 121, 230);
    padding: 10px 7px 0;
  }

  .category:hover {
    cursor: pointer;
  }

  .description {
    font-weight: 600;
    color: rgb(88, 87, 87);
    padding: 7px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .description:hover {
    cursor: pointer;
  }

  .author {
    color: gray;
    font-weight: 400;
    font-size: 11px;
    padding-top: 20px;
  }

  .name {
    font-weight: 600;
  }

  &:hover {
    cursor: pointer;
    border: 2px red solid;
    & .ratio-image{
      transition: 1s;
      transform: scale(1.1);
    }
  }

  .btn-wrapper {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;
interface cardAlbumProps {
  id: string;
  title: string;
  image: string;
  generatedDate: string;
  description: string;
}

export default function CardAlbum({
  id,
  title,
  image,
  generatedDate,
  description,
}: cardAlbumProps) {
  const router = useRouter();

  const delCardAlbum = useDelCardAlbum();
  const deleteHandler = (e: any) => {
    e.stopPropagation();
    delCardAlbum(id);
  };

  return (
    <StyledCardAlbum onClick={() => router.push(`/crud/${id}`)}>
      <div className="image-container">
        <RatioResponsiveImage className="ratio-image" src={process.env.NEXT_PUBLIC_AWS_S3_SECRET_BUCKET_ADDRESS + image}/>
      </div>
      <div className="mobile">
        <Heading variant="h4" $isEllipsis={true}>
          {title}
        </Heading>
        <Text color="black" $isEllipsis={true}>
          {description}
        </Text>
        <Text size="xs">generated {generatedDate}</Text>
      </div>
      <div className="btn-wrapper">
        <FloatingDeleteBtn onClick={deleteHandler} />
      </div>
    </StyledCardAlbum>
  );
}
