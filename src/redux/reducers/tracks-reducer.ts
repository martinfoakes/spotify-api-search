import { Action, ActionTypes } from '../actions';

export const tracksReducer = (state: [] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTracks:
      return action.payload;
    default:
      return state;
  }
};
