import React from 'react';
import './App.css';
import OrderPage from './components/OrderPage';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/order" component={OrderPage} />
      </Switch>
    </Router>
  );
}

export default App;


