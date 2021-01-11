import { useState, createContext, useContext } from 'react';

const BarContext = createContext();
export const useBarContext = () => useContext(BarContext);

export default function BarProvider({ children }) {
  const [bar, setBar] = useState(0);
  return (
    <BarContext.Provider value={{ bar, setBar }}>
      {children}
    </BarContext.Provider>
  );
}
