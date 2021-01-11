import { useState, createContext, useContext } from 'react';

const FooContext = createContext();
export const useFooContext = () => useContext(FooContext);

export default function FooProvider({ children }) {
  const [foo, setFoo] = useState(0);
  return (
    <FooContext.Provider value={{ foo, setFoo }}>
      {children}
    </FooContext.Provider>
  );
}
