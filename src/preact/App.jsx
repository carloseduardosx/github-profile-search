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
      <Home default path="/github-profile-search" />
      <Profile path="/github-profile-search/profile" />
      <Repos path="/github-profile-search/repos" />
      <Notes path="/github-profile-search/notes" />
    </Router>
  </div>
);

export default App;
