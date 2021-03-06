import { asImmutable } from '../../../helper/immutableHelper';
import * as actions from './actions';

const initialState = asImmutable({});

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_USER.SUCCEEDED:
      return state.merge(payload.data || {});
    case actions.FETCH_USER_NOTES.SUCCEEDED:
      return state.merge({
        notes: payload.data || []
      });
    case actions.STORE_USER_NOTE.SUCCEEDED:
      return state.set('notes', state.get('notes').push(asImmutable(payload.data)));
    case actions.FETCH_REPOSITORIES.SUCCEEDED:
      return state.merge({
        repositories: payload.data || []
      });
    default:
      return state;
  }
};

export default reducer;
