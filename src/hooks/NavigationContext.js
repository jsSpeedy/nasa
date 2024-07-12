"use client";
import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <NavigationContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);

// navigasyon durumunu global olarak yönetmek için gerekli olan context ve provider'ı içeriyor.
