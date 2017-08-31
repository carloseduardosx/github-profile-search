import { h } from 'preact';
import { Router } from 'preact-router';
import Home from './home';

const App = ({ store }) => (
  <div>
    <Router>
      <Home default store={store} path="/" />
    </Router>
  </div>
);

export default App;
