import { createSelector } from 'reselect';
import { MODULE_NAME } from './constants';
import { sort } from '../../../helper/collectionHelper';
import { emptyList } from '../../../helper/immutableHelper';

export const getUser = state => state.get(MODULE_NAME);
export const getUsername = state => state.getIn([MODULE_NAME, 'login']);
export const getUserNotes = state => state.getIn([MODULE_NAME, 'notes'], emptyList);
export const getUserRepositories = state => state.getIn([MODULE_NAME, 'repositories'], emptyList);
export const getUserImageUrl = state => state.getIn([MODULE_NAME, 'avatar_url']);

export const getOrderedUserNotes = createSelector(
  getUserNotes,
  (notes) => sort(notes, (note) => note.get('id'), true)
);
