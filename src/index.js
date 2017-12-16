import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// pages
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

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/other" component={Other} />
        <Route
          component={() => (
            <div>
              <h1>Select route</h1>
            </div>
          )}
        />
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);
