import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as homeReducer } from '../containers/Home/store';

const reudcer = combineReducers({
  home: homeReducer,
});

const isClient = typeof window !== 'undefined';

export default function getStore(initState = {}) {
  if (isClient) {
    initState = window.initState.state;
  }
  return createStore(reudcer, initState, applyMiddleware(thunk));
}