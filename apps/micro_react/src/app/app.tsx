// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-react';
import MicroReactComponent from '../../../../libs/common-ui/src/lib/components/MicroReactComponent';
import { Banner } from '@micro-frontend-react/common-ui';

export function App() {
  return (
    <div className={styles['app_wrapper']}>
      <NxWelcome title="micro_react" />
      <Banner text="I'm imported mui Button" />
      <br />
      <MicroReactComponent />
    </div>
  );
}

export default App;
