import { h } from 'preact';
import { mountWith, getTestStore } from '../../../test/helpers';
import { userStateFullLoaded } from '../../../test/states/user';
import Profile from '../../profile';

describe('Profile page tests', () => {
  it('Render Profile page without crashing', (done) => {
    const wrapper = mountWith(<Profile />);

    expect(wrapper).toHaveLength(1);
    done();
  });

  it('Render Profile page with initial state without crashing', (done) => {
    getTestStore(done, userStateFullLoaded)
      .then(testStore => {
        const wrapper = mountWith(<Profile />, testStore);

        expect(wrapper).toHaveLength(1);
        done();
      });
  });
});
