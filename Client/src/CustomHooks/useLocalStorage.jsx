export const useLocalStorage = () => {
  const handleSetLocalStorage = (key, token) => {
    localStorage.setItem(key, JSON.stringify(token));
  };

  const handleGetLocalStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  };

  const handleRemoveLocalStorage = (key) => {
    return localStorage.removeItem(key);
  };

  return {
    handleSetLocalStorage,
    handleGetLocalStorage,
    handleRemoveLocalStorage,
  };
};
