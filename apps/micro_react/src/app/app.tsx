// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-react';
import { useState } from 'react';
import { Banner, RatingStar } from '@micro-frontend-react/common-ui';
import { Characters } from '../components/characters';

const App = () => {
  const [showCharacters, setShowCharacters] = useState<boolean>(false);
  const handleClick = () => setShowCharacters(!showCharacters);
  return (
    <div className={styles['app_wrapper']}>
      <NxWelcome title="Micro_react App" />
      <Banner
        handleClick={handleClick}
        showCharacters={showCharacters}
      >
        {!showCharacters ? 'Show characters' : 'Hide'}
      </Banner>
      <br />
      <RatingStar />
      <Characters showCharacters={showCharacters} />
    </div>
  );
};

export default App;
