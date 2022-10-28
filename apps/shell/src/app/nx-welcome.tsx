import { DataContext } from '@micro-frontend-react/shared/data-context';
import { useContext } from 'react';

export function NxWelcome({ title }: { title: string }) {
  const { counter, setCounter } = useContext(DataContext);
  return (
    <>
      {title} ( +1 )
      <br />
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        counter {counter}
      </button>{' '}
    </>
  );
}

export default NxWelcome;
