import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import './App.css'


export default function App() {

  const [current, setCurrent] = useState('home')
  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key)
  };

  return (
    <Router>
      <div className="main_container">
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home" >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="dashboard" >
            <Link to="/Dashboard">Dashboard</Link>
          </Menu.Item>
        </Menu>

        <Switch>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}