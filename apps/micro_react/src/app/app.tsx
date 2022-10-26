// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-react';
import MicroReactComponent from '../../../../libs/common-ui/src/lib/components/MicroReactComponent';
import Characters from '../../../../libs/common-ui/src/lib/components/Characters';
import { useState } from 'react';
import { Banner } from '@micro-frontend-react/common-ui';

const App = () => {
  const [showCharacters, setShowCharacters] = useState(false);
  const handleClick = () => setShowCharacters(!showCharacters);
  return (
    <div className={styles['app_wrapper']}>
      <NxWelcome title="micro_react" />
      <Banner handleClick={handleClick} showCharacters={showCharacters} />
      <br />
      <MicroReactComponent />
      <Characters showCharacters={showCharacters} />
    </div>
  );
};

export default App;
