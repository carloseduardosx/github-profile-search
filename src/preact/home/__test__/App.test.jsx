
import { h, render } from 'preact';
import Home from '../Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Home />, div);
});
