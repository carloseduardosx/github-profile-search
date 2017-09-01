import * as client from './client';
import { firebaseApiUrl as apiUrl } from './constants';

export function fetchNotes({ userName }) {
  return client.get(apiUrl, `users/${userName}/notes.json?format=export`);
}

export function storeNote({ userName, noteId, message }) {
  return client.put(apiUrl, `users/${userName}/notes/${noteId}.json`, {
    message,
    id: noteId,
    createdAt: new Date()
  });
}
