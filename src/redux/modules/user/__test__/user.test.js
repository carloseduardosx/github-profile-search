import { getTestStore } from '../../../../test/helpers';
import { user } from '../../../modules';
import { userStateFullLoaded } from '../../../../test/states/user';

describe('user tests', () => {
  it('should load user specific data', (done) => {
    getTestStore(done, userStateFullLoaded)
      .then(testStore => {
        const username = testStore.select(user.selectors.getUsername);
        const imageUrl = testStore.select(user.selectors.getUserImageUrl);
        expect(username).toBe('carloseduardosx');
        expect(imageUrl).toBe('https://avatars2.githubusercontent.com/u/14042601?v=4');
        done();
      }).catch(e => console.error(e));
  });

  it('should load user repositories', (done) => {
    getTestStore(done, userStateFullLoaded)
      .then(testStore => {
        const repositories = testStore.select(user.selectors.getUserRepositories);
        expect(repositories.size).toBe(2);
        done();
      }).catch(e => console.error(e));
  });

  it('should load user notes', (done) => {
    getTestStore(done, userStateFullLoaded)
      .then(testStore => {
        const notes = testStore.select(user.selectors.getUserNotes);
        const orderedNotes = testStore.select(user.selectors.getOrderedUserNotes);
        expect(notes.size).toBe(2);
        expect(orderedNotes.size).toBe(2);
        done();
      }).catch(e => console.error(e));
  });

  it('should dispatch FETCH_REPOSITORIES when FETCH_USER_SUCCEEDED is dispatched', (done) => {
    getTestStore(done, userStateFullLoaded)
      .then(testStore => {
        testStore.when(user.actions.FETCH_REPOSITORIES.REQUESTED, () => done());
        testStore.dispatch({
          type: user.actions.FETCH_USER.SUCCEEDED,
          payload: {
            args: {
              userName: 'carloseduardo'
            }
          }
        });
        done();
      }).catch(e => console.error(e));
  });

  it('should dispatch FETCH_NOTES when FETCH_USER_SUCCEEDED is dispatched', (done) => {
    getTestStore(done, userStateFullLoaded)
      .then(testStore => {
        testStore.when(user.actions.FETCH_USER_NOTES.REQUESTED, () => done());
        testStore.dispatch({
          type: user.actions.FETCH_USER.SUCCEEDED,
          payload: {
            args: {
              userName: 'carloseduardo'
            }
          }
        });
        done();
      }).catch(e => console.error(e));
  });
});
