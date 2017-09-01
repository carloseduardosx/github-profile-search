import { MODULE_NAME } from './constants';

export const getUser = state => state.get(MODULE_NAME);
export const getUserRepositories = state => state.getIn([MODULE_NAME, 'repositories']);
export const getUserImageUrl = state => state.getIn([MODULE_NAME, 'avatar_url']);
