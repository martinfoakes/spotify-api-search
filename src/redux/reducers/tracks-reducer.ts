import { Action, ActionTypes } from '../actions';

export const tracksReducer = (
  state: {
    items: [];
    total: number;
  } = {
    items: [],
    total: 0,
  },
  action: Action,
) => {
  switch (action.type) {
    case ActionTypes.fetchTracks:
      return action.payload;
    default:
      return state;
  }
};
