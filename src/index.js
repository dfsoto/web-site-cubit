import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import ListUsers from './Components/Users/ListUsers';
import DetailUser from './Components/Users/DetailUser';
import Questions from './Components/Questions/Questions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <Switch>
        <Route path="/users">
          <ListUsers />
        </Route>
        <Route path="/user/:id" children={<DetailUser/>} />
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
