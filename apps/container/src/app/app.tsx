// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-container';

export function App() {
  return (
    <div className={styles['app_wrapper']}>
      <NxWelcome title="Container App" />
    </div>
  );
}

export default App;
