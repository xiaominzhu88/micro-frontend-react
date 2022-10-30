import { createContext, useState, useCallback } from 'react';

type CounterContextType = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

export const DataContext = createContext<CounterContextType>({
  counter: 1,
  increment: () => {},
  decrement: () => {},
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState(1);

  const increment = () => setCounter((previousCounter) => previousCounter + 1);

  const decrement = () => setCounter((previousCounter) => previousCounter - 1);

  return (
    <DataContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </DataContext.Provider>
  );
};
