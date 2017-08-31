import * as constants from './constants';

export const API_CALL_REQUESTED = `${constants.MODULE_NAME}/API_CALL_REQUESTED`;

export const requestApiCall =
  (callName, args, actions) =>
    ({
      type: API_CALL_REQUESTED,
      payload: {
        callName,
        args,
        actions
      }
    });

export const announceApiCall = (type, args) => ({
  type,
  payload: { args },
  meta: { apiCall: constants.STARTED }
});

export const fulfillApiCall = (type, args, data) => ({
  type,
  payload: { args, data },
  meta: { apiCall: constants.SUCCEEDED }
});

export const failApiCall = (type, args, error = {}) => ({
  type,
  payload: { args },
  error: true,
  meta: { ...error, apiCall: constants.FAILED }
});
