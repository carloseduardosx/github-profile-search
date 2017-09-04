
import { h } from 'preact';
import { mountWith, getTestStore } from '../../../test/helpers';
import { Home } from '../../home';

it('renders without crashing', (done) => {
  getTestStore(done)
    .then(testStore => {
      const home = mountWith(<Home />, testStore);
      console.log(home);
      done();
    });
});
