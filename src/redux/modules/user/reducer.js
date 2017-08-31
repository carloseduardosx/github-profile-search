import { asImmutable } from '../../../helper/immutableHelper';
import * as actions from './actions';

const initialState = asImmutable({});

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_USER.SUCCEEDED:
      return state.merge(payload.data || {});
    default:
      return state;
  }
};

export default reducer;
