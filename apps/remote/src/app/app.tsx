import { DataContext } from '@micro-frontend-react/shared/data-context';
import { useContext } from 'react';

export function App() {
  const { counter, setCounter } = useContext(DataContext);
  return (
    <>
      Remote App ( -1 )
      <br />
      <br />
      <button onClick={() => setCounter(counter - 1)}>
        counter {counter}
      </button>{' '}
    </>
  );
}

export default App;
