export const useLocalStorage = () => {
  const handleSetLocalStorage = (key, token) => {
    localStorage.setItem(key, JSON.stringify(token));
  };

  const handleGetLocalStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
<<<<<<< HEAD
=======

    // setTokenValue(data);
>>>>>>> a9a40e8 (bug fix : Logout)
    return data;
  };

  const handleRemoveLocalStorage = (key) => {
    return localStorage.removeItem(key);
  };

  return {
<<<<<<< HEAD
=======
    // tokenValue,
>>>>>>> a9a40e8 (bug fix : Logout)
    handleSetLocalStorage,
    handleGetLocalStorage,
    handleRemoveLocalStorage,
  };
};
