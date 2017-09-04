
import { h } from 'preact';
import { mountWith, getTestStore } from '../../../test/helpers';
import Home from '../../home';

it('renders without crashing', (done) => {
  getTestStore(done)
    .then(testStore => {
      const Home = mountWith(<Home />, testStore);
      console.log('TESTING', Home);
      done();
    }).catch(done);
});
