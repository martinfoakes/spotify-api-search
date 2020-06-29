/**
 * Action Creators with types / payloads
 */

import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface FetchTracksAction {
  type: ActionTypes.fetchTracks;
  payload: {
    items: [];
    total: number;
  };
}

export const searchTracks = (searchQuery: string, apiToken: string) => {
  return async (dispatch: Dispatch) => {
    const spotifyBaseUrl = 'https://api.spotify.com/v1/search?q=';
    const fullQueryUrl = `${spotifyBaseUrl}${searchQuery}&type=track`;
    const response = await axios.get(fullQueryUrl, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });

    dispatch<FetchTracksAction>({
      type: ActionTypes.fetchTracks,
      payload: {
        items: response.data.tracks.items,
        total: response.data.tracks.total,
      },
    });
  };
};
