import OnboardingFlow from '@/components/OnboardingFlow'
import { useCardAlbum } from '@/hooks/useCardAlbum';
import { useOnboarding } from '@/hooks/useOnboarding';
import { CardAlbum as CardAlbumType } from "@/types/types";
import React from 'react'
import { StrictImage } from '../../atoms/imgae/StrictImage';

export default function OnboardingFlowSec() {
  const { albums }: { albums: Array<CardAlbumType> } = useCardAlbum({
    pageNum: 1,
    limit: 10,
  });
  const { currentIndex, goToNext, goToPrev } = useOnboarding(albums.length);
  return (
    <OnboardingFlow
          currentIndex={currentIndex}
          goToNext={goToNext}
          goToPrev={goToPrev}
        >
          {albums!.map((card, idx) => (
            <StrictImage
              height={200}
              width={200}
              src={process.env.NEXT_PUBLIC_AWS_S3_SECRET_BUCKET_ADDRESS +card.image}
              key={idx}
            />
          ))}
    </OnboardingFlow>
  );
}
