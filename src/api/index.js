import * as calls from './gitHubApi';
import { toUpperSnakeCase } from '../helper/stringHelper';

const callNames = Object.keys(calls).reduce((acc, name) => {
  const constantName = toUpperSnakeCase(name);
  acc[constantName] = name;
  return acc;
}, {});

export {
  calls,
  callNames
};
