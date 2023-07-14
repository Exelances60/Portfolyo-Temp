import { createContext, useState } from "react";

export const ThemaContext = createContext({
  light: true,
  setLight: () => {},
  openWindow: false,
  setOpenWindow: () => {},
});

export const ThemaProvider = ({ children }) => {
  const [light, setLight] = useState(true);
  const [openWindow, setOpenWindow] = useState(true);
  const value = { light, setLight, openWindow, setOpenWindow };
  return (
    <ThemaContext.Provider value={value}>{children}</ThemaContext.Provider>
  );
};
