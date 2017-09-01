import { Iterable, fromJS } from 'immutable';

export const asImmutable = (obj) => (
  Iterable.isIterable(obj) ? obj : fromJS(obj)
);

export const asJS = (obj) => (
  obj && Iterable.isIterable(obj) ? obj.toJS() : obj
);

export const emptyList = asImmutable([]);
