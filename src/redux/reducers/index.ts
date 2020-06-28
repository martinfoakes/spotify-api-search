import { combineReducers } from 'redux';
import { tracksReducer } from './tracks-reducer';

export interface ReduxStoreState {
  tracks: [];
}

export const reducers = combineReducers<ReduxStoreState>({
  tracks: tracksReducer,
});
