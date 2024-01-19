import { createContext, useState } from "react";

const defaultMenu = {
  menu: false,
  setMenu: () => {},
};

export const MenuContext = createContext(defaultMenu);

export const MenuContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  return (<MenuContext.Provider value={{menu, setMenu}}>{children}</MenuContext.Provider>)
};
