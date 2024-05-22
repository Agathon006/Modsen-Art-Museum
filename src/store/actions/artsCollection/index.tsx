export enum ActionTypes {
  SET_ARTS_COLLECTION_LIST = 'SET_ARTS_COLLECTION_LIST',
  SET_ARTS_COLLECTION_LIST_PROCESS = 'SET_ARTS_COLLECTION_LIST_PROCESS',
}

export interface ISetArtsCollectionListAction {
  type: ActionTypes.SET_ARTS_COLLECTION_LIST;
  payload: any[];
}

export interface ISetArtsCollectionListProcessAction {
  type: ActionTypes.SET_ARTS_COLLECTION_LIST_PROCESS;
  payload: 'loading' | 'confirmed' | 'error';
}

export const setArtsCollectionList = (payload: any[]): ISetArtsCollectionListAction => ({
  type: ActionTypes.SET_ARTS_COLLECTION_LIST,
  payload,
});

export const setArtsCollectionListProcess = (
  payload: 'loading' | 'confirmed' | 'error'
): ISetArtsCollectionListProcessAction => ({
  type: ActionTypes.SET_ARTS_COLLECTION_LIST_PROCESS,
  payload,
});
