
import { h } from 'preact';
import { mountWith, getTestStore } from '../../../test/helpers';
import Home from '../../home';

describe('Home page tests', () => {
  it('renders Home page without crashing', (done) => {
    getTestStore(done)
      .then(testStore => {
        mountWith(<Home />, testStore);
        done();
      });
  });
});
