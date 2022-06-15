import { MutableRefObject, useEffect, useRef, useState } from "react";

type ReturnTuple = [
  number,
  MutableRefObject<HTMLElement>,
  MutableRefObject<HTMLElement>
];

const useMinHeight = (initial: number): ReturnTuple => {
  const [minHeight, setMinHeight] = useState(initial);

  const headerRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const offset =
      footerRef.current.offsetHeight + headerRef.current.offsetHeight;
    setMinHeight(offset);
  }, [headerRef, footerRef]);

  return [minHeight, headerRef, footerRef];
};

export default useMinHeight;
