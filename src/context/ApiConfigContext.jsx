import React, { createContext, useState } from 'react';

export const ApiConfigContext = createContext({
  baseUrl: 'https://randomuser.me/api',
  seed: '',
  setSeed: () => {}
});

export function ApiConfigProvider({ children }) {
  const baseUrl = 'https://randomuser.me/api';
  const [seed, setSeed] = useState('google');   // initial default

  return (
    <ApiConfigContext.Provider value={{ baseUrl, seed, setSeed }}>
      {children}
    </ApiConfigContext.Provider>
  );
}
