import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Contact1 from './components/Contact1'; 
import Contact2 from './components/Contact2'; 
import Contact3 from './components/Contact3'; 
import './index.css';


ReactDOM.render(
  <Router>
    <Navbar className="bg-warning">
      <Link className="p-3" to="/">Contact1</Link>
      <Link className="p-3" to="/contact2">Contact2</Link>
      <Link className="p-3" to="/contact3">Contact3</Link>
    </Navbar>
    <Switch>
        <Route exact path="/" component={Contact1} />
        <Route path="/contact2" component={Contact2} />
        <Route path="/contact3" component={Contact3} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
