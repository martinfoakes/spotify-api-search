import { combineReducers } from 'redux';
import { tracksReducer } from './tracks-reducer';

export interface ReduxStoreState {
  tracks: {
    items: [];
    total: number;
  };
}

export const reducers = combineReducers<ReduxStoreState>({
  tracks: tracksReducer,
});
