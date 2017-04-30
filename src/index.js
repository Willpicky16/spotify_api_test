import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../public/bootstrap/css/bootstrap.css';

import App from './components/App';
import SearchPage from './components/SearchPage';
import FrontPage from './components/FrontPage';
import SecondPage from './components/SecondPage';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={SearchPage}/>
        <Route path='/artist' component={FrontPage}/>
        <Route path='/artist/albums' component={SecondPage}/>
      </Route>
    </Router>,
  document.getElementById('root')
);
