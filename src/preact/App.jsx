import { h } from 'preact';
import { Router } from 'preact-router';
import Home from './home';

const App = () => (
  <div>
    <Router>
      <Home default path="/" />
    </Router>
  </div>
);

export default App;
