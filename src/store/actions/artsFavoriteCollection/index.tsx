export enum ActionTypes {
  SET_FAVORITE_COLLECTION_LIST = 'SET_FAVORITE_COLLECTION_LIST',
  SET_FAVORITE_COLLECTION_LIST_PROCESS = 'SET_FAVORITE_COLLECTION_LIST_PROCESS',
  SET_FAVORITE_ARTS_ID_LIST = 'SET_FAVORITE_ARTS_ID_LIST',
}

export interface SetFavoriteCollectionListAction {
  type: ActionTypes.SET_FAVORITE_COLLECTION_LIST;
  payload: any[];
}

export interface SetFavoriteCollectionListProcessAction {
  type: ActionTypes.SET_FAVORITE_COLLECTION_LIST_PROCESS;
  payload: 'loading' | 'confirmed' | 'error';
}

export interface SetFavoriteArtsIdListAction {
  type: ActionTypes.SET_FAVORITE_ARTS_ID_LIST;
  payload: number[];
}

export const setFavoriteCollectionList = (payload: any[]): SetFavoriteCollectionListAction => ({
  type: ActionTypes.SET_FAVORITE_COLLECTION_LIST,
  payload,
});

export const setFavoriteCollectionListProcess = (
  payload: 'loading' | 'confirmed' | 'error'
): SetFavoriteCollectionListProcessAction => ({
  type: ActionTypes.SET_FAVORITE_COLLECTION_LIST_PROCESS,
  payload,
});

export const setFavoriteArtsIdList = (payload: number[]): SetFavoriteArtsIdListAction => ({
  type: ActionTypes.SET_FAVORITE_ARTS_ID_LIST,
  payload,
});
