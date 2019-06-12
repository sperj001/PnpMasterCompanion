import { Store, createStore } from 'redux';
import { state } from './reducers';

export const store: Store<any> = createStore(
    state
  );