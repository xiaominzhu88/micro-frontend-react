import { CounterContextType, DataContext } from '@micro-frontend-react/shared/data-context';
import { useContext } from 'react';
import { CustomButton } from '@micro-frontend-react/common-ui';

const App = () => {
  const { counter, decrement } = useContext<CounterContextType>(DataContext)
  return (
    <>
      Remote App ( -1 )
      <br />
      <br />
      <CustomButton
        onClick={decrement}
        color="primary"
        variant="contained"
        size="medium"
      >
        {`Counter ${counter}`}
      </CustomButton>
    </>
  );
};

export default App;
