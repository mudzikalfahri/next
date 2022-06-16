import { useEffect, useState } from "react";

const useMinHeight = (ref): number => {
  const [minHeight, setMinHeight] = useState(0);
  useEffect(() => {
    const offset = ref.reduce((sum, cur) => {
      const currentsum = sum + cur.current.offsetHeight;
      return currentsum;
    }, 0);
    setMinHeight(offset);
  }, [ref]);

  return minHeight;
};

export default useMinHeight;
