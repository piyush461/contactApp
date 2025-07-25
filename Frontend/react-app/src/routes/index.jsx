import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Form from '../components/Form';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/form" component={Form} />
      </Switch>
    </Router>
  );
};

export default Routes;