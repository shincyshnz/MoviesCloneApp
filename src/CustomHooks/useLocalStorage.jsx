import React, { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [tokenValue, setTokenValue] = useState("");

  // useEffect(() => {});

  const handleSetLocalStorage = (key, token) => {
    JSON.stringify(localStorage.setItem(key, token));
  };

  const handleGetLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    setTokenValue(data);
    return data;
  };

  const handleRemoveLocalStorage = (key) => {
    return localStorage.removeItem(key);
  };

  return {
    tokenValue,
    handleSetLocalStorage,
    handleGetLocalStorage,
    handleRemoveLocalStorage,
  };
};
