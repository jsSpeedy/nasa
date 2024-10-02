"use client";
import { createContext, useContext, useEffect, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(() => {
    return Number(localStorage.getItem("activeIndex")) || 2;
  });

  useEffect(() => {
    localStorage.setItem("activeIndex", activeIndex);
  }, [activeIndex]);

  return (
    <NavigationContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);

// navigasyon durumunu global olarak yönetmek için gerekli olan context ve provider'ı içeriyor.
