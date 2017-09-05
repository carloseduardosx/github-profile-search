
import { h } from 'preact';
import { mountWith, getTestStore } from '../../../test/helpers';
import { userStateFullLoaded } from '../../../test/states/user';
import Home from '../../home';

describe('Home page tests', () => {
  it('renders Home page without crashing', (done) => {
    const wrapper = mountWith(<Home />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('renders Home page with initial state without crashing', (done) => {
    getTestStore(done, userStateFullLoaded)
      .then(testStore => {
        const wrapper = mountWith(<Home />, testStore);
        expect(wrapper).toHaveLength(1);
        done();
      });
  });

  it('renders Home page and check childrens', (done) => {
    getTestStore(done)
      .then(testStore => {
        const wrapper = mountWith(<Home />, testStore);

        expect(wrapper.find('.search')).toBeDefined();
        expect(wrapper.find('.button--material')).toBeDefined();
        done();
      });
  });
});
