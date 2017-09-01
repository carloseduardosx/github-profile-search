import { h } from 'preact';
import { Router } from 'preact-router';
import Home from './home';
import Profile from './profile';
import Toolbar from './toolbar';

const App = () => (
  <div>
    <Toolbar />
    <Router>
      <Home default path="/" />
      <Profile path="/profile" />
    </Router>
  </div>
);

export default App;
