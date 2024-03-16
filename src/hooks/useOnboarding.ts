
import { useCallback, useState } from "react";

export function useOnboarding(arrayLenght:number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    if (arrayLenght <= currentIndex + 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  },[arrayLenght,currentIndex]);

  const goToPrev = useCallback(() => {
    if (currentIndex == 0) {
      setCurrentIndex(arrayLenght - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  },[arrayLenght,currentIndex]);

  return { currentIndex, goToNext, goToPrev };
}
