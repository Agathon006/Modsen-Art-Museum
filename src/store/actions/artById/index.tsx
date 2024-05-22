export enum ActionTypes {
  SET_ART_BY_ID = 'SET_ART_BY_ID',
  SET_ART_BY_ID_PROCESS = 'SET_ART_BY_ID_PROCESS',
}

export interface SetArtByIdAction {
  type: ActionTypes.SET_ART_BY_ID;
  payload: any;
}

export interface SetArtByIdProcessAction {
  type: ActionTypes.SET_ART_BY_ID_PROCESS;
  payload: 'loading' | 'confirmed' | 'error';
}

export const setArtById = (payload: any): SetArtByIdAction => ({
  type: ActionTypes.SET_ART_BY_ID,
  payload,
});

export const setArtByIdProcess = (
  payload: 'loading' | 'confirmed' | 'error'
): SetArtByIdProcessAction => ({
  type: ActionTypes.SET_ART_BY_ID_PROCESS,
  payload,
});
