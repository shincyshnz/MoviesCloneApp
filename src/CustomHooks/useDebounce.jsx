import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
<<<<<<< HEAD

=======
>>>>>>> a9a40e8 (bug fix : Logout)
  useEffect(() => {
    const timeOut = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value, delay]);

  return { debouncedValue };
};
