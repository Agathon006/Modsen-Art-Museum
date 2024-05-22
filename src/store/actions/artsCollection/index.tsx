export enum ActionTypes {
  SET_ARTS_COLLECTION_LIST = 'SET_ARTS_COLLECTION_LIST',
  SET_ARTS_COLLECTION_LIST_PROCESS = 'SET_ARTS_COLLECTION_LIST_PROCESS',
}

export interface SetArtsCollectionListAction {
  type: ActionTypes.SET_ARTS_COLLECTION_LIST;
  payload: any[];
}

export interface SetArtsCollectionListProcessAction {
  type: ActionTypes.SET_ARTS_COLLECTION_LIST_PROCESS;
  payload: 'loading' | 'confirmed' | 'error';
}

export const setArtsCollectionList = (payload: any[]): SetArtsCollectionListAction => ({
  type: ActionTypes.SET_ARTS_COLLECTION_LIST,
  payload,
});

export const setArtsCollectionListProcess = (
  payload: 'loading' | 'confirmed' | 'error'
): SetArtsCollectionListProcessAction => ({
  type: ActionTypes.SET_ARTS_COLLECTION_LIST_PROCESS,
  payload,
});
