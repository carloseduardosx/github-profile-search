import * as client from './client';
import { gitHubApiUrl as apiUrl } from './constants';

export function getUser({ userName }) {
  client.get(apiUrl, `users/${userName}`);
}

export function getUserRepositories({ userName }) {
  client.get(apiUrl, `users/${userName}/repos`);
}
