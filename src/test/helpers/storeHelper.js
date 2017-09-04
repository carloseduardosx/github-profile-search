import createTestStore from 'redux-test-store'; // eslint-disable-line import/no-extraneous-dependencies
import store from '../../redux/store';

export const getTestStore = (done) => Promise.resolve(createTestStore(store, done))
  .then(store => {
    // eslint-disable-next-line no-param-reassign
    store.selec = selector => selector(store.getState());
    return store;
  });
