import { DataContext } from '@micro-frontend-react/shared/data-context';
import { useContext } from 'react';
import { CustomButton } from '@micro-frontend-react/common-ui';

type CounterState = { counter: number; increment: () => {} };

const NxWelcome = ({ title }: { title: string }) => {
  const { counter, increment } = useContext(DataContext) as CounterState;
  return (
    <>
      {title} ( +1 )
      <br />
      <br />
      <CustomButton
        onClick={increment}
        color="secondary"
        variant="outlined"
        children={`Counter ${counter}`}
        size="medium"
      />
    </>
  );
};

export default NxWelcome;
