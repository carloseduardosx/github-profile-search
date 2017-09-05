import createTestStore from 'redux-test-store'; // eslint-disable-line import/no-extraneous-dependencies
import { createReduxStore } from '../../redux/store';

export const getTestStore = (done, initialState = {}) => createReduxStore(initialState)
  .then(store => createTestStore(store, done))
  .then(store => {
    // eslint-disable-next-line no-param-reassign
    store.select = selector => selector(store.getState());
    return store;
  });
