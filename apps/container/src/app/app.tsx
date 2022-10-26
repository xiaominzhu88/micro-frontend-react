// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-container';
import { Banner } from '@micro-frontend-react/common-ui';

export function App() {
  return (
    <div className={styles['app_wrapper']}>
      <NxWelcome title="container" />
      <Banner text="I'm imported mui Button" />
    </div>
  );
}

export default App;
