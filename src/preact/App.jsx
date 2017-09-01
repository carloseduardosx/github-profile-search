import { h } from 'preact';
import { Router } from 'preact-router';
import Home from './home';
import Profile from './profile';
import Toolbar from './toolbar';
import Repos from './repos';

const App = () => (
  <div>
    <Toolbar />
    <Router>
      <Home default path="/" />
      <Profile path="/profile" />
      <Repos path="/repos" />
    </Router>
  </div>
);

export default App;
