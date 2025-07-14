import React, { createContext } from 'react';
import useLocalStorage           from '../hooks/useLocalStorage';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
   const [favs, setFavs] = useLocalStorage('FAVS', []);

  return (
    <FavoritesContext.Provider value={{ favs, setFavs }}>
      {children}
    </FavoritesContext.Provider>
  );
}
