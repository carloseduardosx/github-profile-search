import { Iterable, fromJS } from 'immutable';

export const asImmutable = (obj) => (Iterable.isIterable(obj) ? obj : fromJS(obj));
