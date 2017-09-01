import { h } from 'preact';
import { Router } from 'preact-router';
import Home from './home';
import Profile from './profile';

const App = () => (
  <div>
    <Router>
      <Home default path="/" />
      <Profile path="/profile" />
    </Router>
  </div>
);

export default App;
