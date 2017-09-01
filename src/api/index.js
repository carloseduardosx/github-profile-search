import * as gitHubCalls from './gitHubApi';
import * as firebaseCalls from './firebaseApi';
import { toUpperSnakeCase } from '../helper/stringHelper';

const calls = {
  ...gitHubCalls,
  ...firebaseCalls
};

const callNames = Object.keys(calls).reduce((acc, name) => {
  const constantName = toUpperSnakeCase(name);
  acc[constantName] = name;
  return acc;
}, {});

export {
  calls,
  callNames
};
