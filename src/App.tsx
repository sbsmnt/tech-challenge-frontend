import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Sidebar } from './containers/sidebar';
import { Home } from './pages/home';
import { store } from './store';
import classes from './App.module.scss';

interface ProvidersProps {
  children?: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <Provider store={store}>
    <Router>
      {children}
    </Router>
  </Provider>
);

export const App = () => (
  <Providers>
    <div className={classes.root}>
      <Sidebar />
      <Switch>
        <Route path="/movies">
          movies-page-not-implemented
        </Route>
        <Route path="/actors">
          actors-page-not-implemented
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Providers>
);
