import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.scss';

const { Sider } = Layout;

export const Sidebar = () => (
  <Sider collapsible>
    <Menu theme="dark" className={classes.menu}>
      <Menu.Item key="1" className={classes.item}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" className={classes.item}>
        <Link to="/movies">Movies</Link>
      </Menu.Item>
      <Menu.Item key="3" className={classes.item}>
        <Link to="/actors">Actors</Link>
      </Menu.Item>
    </Menu>
  </Sider>
);
