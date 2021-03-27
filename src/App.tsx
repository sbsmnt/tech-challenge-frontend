import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { Sidebar } from './containers/sidebar';
import { Home } from './pages/home';
import { Movies } from './pages/movies';
import { AddMovie } from './pages/addMovie';
import { Actors } from './pages/actors';
import { store } from './store';
import classes from './App.module.scss';

const { Content } = Layout;

interface ProvidersProps {
  children?: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
);

export const App = () => (
  <Providers>
    <Layout>
      <Sidebar />
      <Content className={classes.root}>
        <Switch>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movies/add">
            <AddMovie />
          </Route>
          <Route path="/actors">
            <Actors />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Content>
    </Layout>
  </Providers>
);
