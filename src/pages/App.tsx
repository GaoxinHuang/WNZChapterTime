import React from 'react';
import styles from '../styles/App.module.scss';
import RegisterComponent from './Register';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}></header>
      <RegisterComponent />
    </div>
  );
}

export default App;
