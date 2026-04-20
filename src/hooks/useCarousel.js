import { useCallback, useState, useEffect } from "react";

function useCarousel(length) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [length]);

  const next = useCallback(() => {
    setIndex((prev) => {
      if (prev < length - 1) return prev + 1;
      return prev;
    });
  }, [length]);

  const prev = useCallback(() => {
    setIndex((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  }, [length]);

  return { index, next, prev };
}

export default useCarousel;
