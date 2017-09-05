import { h } from 'preact';
import { mountWith, getTestStore } from '../../../test/helpers';
import { userStateFullLoaded } from '../../../test/states/user';
import Repos from '../../repos';

describe('Repos page tests', () => {
  it('Render Repos page without crashing', (done) => {
    const wrapper = mountWith(<Repos />);

    expect(wrapper).toHaveLength(1);
    done();
  });

  it('Render Repos page with initial state without crashing', (done) => {
    getTestStore(done, userStateFullLoaded)
      .then(testStore => {
        const wrapper = mountWith(<Repos />, testStore);

        expect(wrapper).toHaveLength(1);
        done();
      });
  });
});
