import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Search from '../../screens/Search';
import About from '../../screens/About';

function App() {
  return (
    <Router>
      <Route path="/search/:keyword?" component={Search} exact />
      <Route path="/about" component={About} />
      <Redirect from="/" to="/search" exact />
    </Router>
  );
}

export default App;
