import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import NewVideo from './pages/video';
import NewCategory from './pages/category';
import NotFound from './pages/404';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/new/video" component={NewVideo} exact />
      <Route path="/new/category" component={NewCategory} exact />
      <Route component={NotFound}></Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
);
