import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './pages/home';
import Other from './pages/other';

// render on page
ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/other">Other</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/other" component={Other} />
    </div>
  </Router>,
  document.getElementById('app')
);
