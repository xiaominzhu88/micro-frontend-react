import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import { DataProvider } from '@micro-frontend-react/shared/data-context';

const Remote = React.lazy(() => import('remote/Module'));

export default function App() {
  return (
    <DataProvider>
      <React.Suspense fallback="loading...">
        <div className={styles['nav']}>
          <Link to="/">Home</Link>
          <Link to="/remote">Remote</Link>
        </div>
        <div className={styles['nav']}>
          <Routes>
            <Route path="/" element={<NxWelcome title="Home App" />} />
            <Route path="/remote" element={<Remote />} />
          </Routes>
        </div>
      </React.Suspense>
    </DataProvider>
  );
}
