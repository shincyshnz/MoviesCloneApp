import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeOut = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value, delay]);

  return { debouncedValue };
};
