import * as React from 'react';
import styles from '../styles/App.module.scss';
import RegisterComponent from './Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginComponent from './Login';
import HomeComponent from './Home';
import { AuthenContextProvider } from '../contexts/authen-context';

function App() {
  return (
    <AuthenContextProvider>
      <Router>
        <div className={styles.App}>
          <header className={styles.AppHeader}></header>
          <Switch>
            <Route path="/register" exact>
              <RegisterComponent />
            </Route>
            <Route path="/login" exact>
              <LoginComponent />
            </Route>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>

        </div>
      </Router>
    </AuthenContextProvider>
  );
}

export default App;
