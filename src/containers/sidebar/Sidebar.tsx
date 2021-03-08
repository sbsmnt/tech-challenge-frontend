import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.scss';

export const Sidebar = () => (
  <nav className={classes.root}>
    <div className={classes.item}>
      <Link to="/">Home</Link>
    </div>
    <div className={classes.item}>
      <Link to="/movies">Movies</Link>
    </div>
    <div className={classes.item}>
      <Link to="/actors">Actors</Link>
    </div>
  </nav>
);
