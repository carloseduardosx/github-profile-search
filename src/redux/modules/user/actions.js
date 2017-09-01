import { MODULE_NAME } from './constants';
import { requestActions } from '../../../helper/reduxHelper';

export const FETCH_USER = requestActions(MODULE_NAME, 'FETCH_USER');
export const FETCH_USER_NOTES = requestActions(MODULE_NAME, 'FETCH_USER_NOTES');
export const STORE_USER_NOTE = requestActions(MODULE_NAME, 'STORE_USER_NOTE');
export const FETCH_REPOSITORIES = requestActions(MODULE_NAME, 'FETCH_REPOSITORIES');
