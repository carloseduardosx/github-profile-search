import * as client from './client';
import { gitHubApiUrl as apiUrl } from './constants';

export function fetchUser({ userName }) {
  return client.get(apiUrl, `users/${userName}`).then(result => result);
}

export function fetchUserRepositories({ userName }) {
  return client.get(apiUrl, `users/${userName}/repos`);
}
