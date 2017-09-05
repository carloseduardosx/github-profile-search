import { h } from 'preact';
import { mountWith, getTestStore } from '../../../test/helpers';
import { userStateFullLoaded } from '../../../test/states/user';
import Notes from '../../notes';

describe('Notes page test', () => {
  it('Render Notes page without crashing', (done) => {
    const wrapper = mountWith(<Notes />);

    expect(wrapper).toHaveLength(1);
    done();
  });

  it('Render Notes page with initial state without crashing', (done) => {
    getTestStore(done, userStateFullLoaded)
      .then(testStore => {
        const wrapper = mountWith(<Notes />, testStore);

        expect(wrapper).toHaveLength(1);
        done();
      });
  });
});
