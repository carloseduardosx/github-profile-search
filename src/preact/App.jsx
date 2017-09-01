import { h } from 'preact';
import { Router } from 'preact-router';
import Home from './home';
import Profile from './profile';
import Toolbar from './toolbar';
import Repos from './repos';
import Notes from './notes';

const App = () => (
  <div>
    <Toolbar />
    <Router>
      <Home default path="/" />
      <Profile path="/profile" />
      <Repos path="/repos" />
      <Notes path="/notes" />
    </Router>
  </div>
);

export default App;
