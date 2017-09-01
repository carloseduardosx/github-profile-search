import { MODULE_NAME } from './constants';

export const getUser = state => state.get(MODULE_NAME);
export const getUserImageUrl = state => state.getIn([MODULE_NAME, 'avatar_url']);
