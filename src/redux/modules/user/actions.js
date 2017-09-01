import { MODULE_NAME } from './constants';
import { requestActions } from '../../../helper/reduxHelper';

export const FETCH_USER = requestActions(MODULE_NAME, 'FETCH_USER');
export const FETCH_REPOSITORIES = requestActions(MODULE_NAME, 'FETCH_REPOSITORIES');
