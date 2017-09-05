import { applyMiddleware, compose, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import { asImmutable } from '../helper/immutableHelper';
import * as sagas from './sagas';
import * as modules from './modules';


export const createReduxStore = (initialState = {}) => new Promise((resolve) => {
  const sagaMiddleware = createSagaMiddleware();

  const reducers = combineReducers(Object.keys(modules).reduce((acc, module) => {
    const currentModule = modules[module];
    if (currentModule && currentModule.reducer) {
      acc[module] = currentModule.reducer.default;
    }
    return acc;
  }, {}));

  const enhancers = compose(
    applyMiddleware(sagaMiddleware),
    (window.devToolsExtension ? window.devToolsExtension() : f => f)
  );

  const store = createStore(reducers, asImmutable(initialState), enhancers);

  Object.keys(sagas).forEach(sagaName => sagaMiddleware.run(sagas[sagaName]));

  resolve(store);
});
