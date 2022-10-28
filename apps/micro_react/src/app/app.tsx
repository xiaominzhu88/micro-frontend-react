// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-react';
import { useState } from 'react';
import {
  Banner,
  Characters,
  MicroReactComponent,
} from '@micro-frontend-react/common-ui';

const App = () => {
  const [showCharacters, setShowCharacters] = useState(false);
  const handleClick = () => setShowCharacters(!showCharacters);
  return (
    <div className={styles['app_wrapper']}>
      <NxWelcome title="Micro_react App" />
      <Banner handleClick={handleClick} showCharacters={showCharacters} />
      <br />
      <MicroReactComponent />
      <Characters showCharacters={showCharacters} />
    </div>
  );
};

export default App;
