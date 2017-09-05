import { h } from 'preact';
import { mountWith, getTestStore } from '../../../test/helpers';
import { userStateFullLoaded } from '../../../test/states/user';
import Toolbar from '../../toolbar';

describe('Repos page tests', () => {
  it('Render Toolbar page without crashing', (done) => {
    const wrapper = mountWith(<Toolbar />);

    expect(wrapper).toHaveLength(1);
    done();
  });

  it('Render Toolbar page with initial state without crashing', (done) => {
    getTestStore(done, userStateFullLoaded)
      .then(testStore => {
        const wrapper = mountWith(<Toolbar />, testStore);

        expect(wrapper).toHaveLength(1);
        done();
      });
  });
});
