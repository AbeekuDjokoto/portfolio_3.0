import { RefObject, useEffect, useState } from "react";

function useElementOnScreen(
  ref: RefObject<Element>,
  rootMargin = "0px",
) {
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin },
    );

    const observedElement = ref.current;
    if (observedElement) {
      observer.observe(observedElement);
    }

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

export { useElementOnScreen };
