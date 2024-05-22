import { IArtInfo } from '@services/ArtService';

export enum ActionTypes {
  SET_ART_BY_ID = 'SET_ART_BY_ID',
  SET_ART_BY_ID_PROCESS = 'SET_ART_BY_ID_PROCESS',
}

export interface ISetArtByIdAction {
  type: ActionTypes.SET_ART_BY_ID;
  payload: IArtInfo;
}

export interface ISetArtByIdProcessAction {
  type: ActionTypes.SET_ART_BY_ID_PROCESS;
  payload: 'loading' | 'confirmed' | 'error';
}

export const setArtById = (payload: IArtInfo): ISetArtByIdAction => ({
  type: ActionTypes.SET_ART_BY_ID,
  payload,
});

export const setArtByIdProcess = (
  payload: 'loading' | 'confirmed' | 'error'
): ISetArtByIdProcessAction => ({
  type: ActionTypes.SET_ART_BY_ID_PROCESS,
  payload,
});
