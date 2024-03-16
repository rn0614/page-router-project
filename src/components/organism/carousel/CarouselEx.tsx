import React from 'react'
import { SwipeCarousel } from '../../molecular/carousel/Carousel2'
import { useCardAlbum } from "@/hooks/useCardAlbum";
import { CardAlbum as CardAlbumType } from "@/types/types";

export default function CarouselEx() {
  const { albums }: { albums: Array<CardAlbumType> } = useCardAlbum({
    pageNum: 1,
    limit: 10,
    pre: true,
  });
  return (
    <SwipeCarousel imgs={albums}/>
  )
}
