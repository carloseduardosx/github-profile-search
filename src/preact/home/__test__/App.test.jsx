
import { h } from 'preact';
import { mount } from 'enzyme';
import Home from '../Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  mount(<Home />, div);
});
