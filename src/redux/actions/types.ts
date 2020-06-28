// Types of Actions saved as an Enum
import { FetchTracksAction } from './tracks-actions';

export enum ActionTypes {
  fetchTracks,
}

export type Action = FetchTracksAction;
