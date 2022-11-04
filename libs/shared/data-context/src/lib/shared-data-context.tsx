import { createContext, ReactNode, useState } from 'react';

export type CounterContextType = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

export const DataContext = createContext<CounterContextType>({
  counter: 1,
  increment: () => null,
  decrement: () => null,
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState(1);

  const increment = () => setCounter((previousCounter) => previousCounter + 1);

  const decrement = () => setCounter((previousCounter) => previousCounter - 1);

  return (
    <DataContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </DataContext.Provider>
  );
};
