
import { h } from 'preact';
import { mount } from 'enzyme';
import Home from '../../home';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  mount(<Home />, div);
});
