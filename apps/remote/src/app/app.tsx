import { DataContext } from '@micro-frontend-react/shared/data-context';
import { useContext } from 'react';
import { CustomButton } from '@micro-frontend-react/common-ui';

type CounterState = { counter: number; decrement: () => {} };

const App = () => {
  const { counter, decrement } = useContext(DataContext) as CounterState;
  return (
    <>
      Remote App ( -1 )
      <br />
      <br />
      <CustomButton
        onClick={decrement}
        color="primary"
        variant="contained"
        children={`Counter ${counter}`}
        size="medium"
      />
    </>
  );
};

export default App;
