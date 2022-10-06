import { useEffect, useRef } from "react";

export const useIsMounted = () => {
  let isMounted = useRef(null);
  isMounted.current = true;
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  });
  return { isMounted };
};
