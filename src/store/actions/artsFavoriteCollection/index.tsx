import { IArtInfo } from '../../../services/ArtService';

export enum ActionTypes {
  SET_FAVORITE_COLLECTION_LIST = 'SET_FAVORITE_COLLECTION_LIST',
  SET_FAVORITE_COLLECTION_LIST_PROCESS = 'SET_FAVORITE_COLLECTION_LIST_PROCESS',
  SET_FAVORITE_ARTS_ID_LIST = 'SET_FAVORITE_ARTS_ID_LIST',
}

export interface ISetFavoriteCollectionListAction {
  type: ActionTypes.SET_FAVORITE_COLLECTION_LIST;
  payload: IArtInfo[];
}

export interface ISetFavoriteCollectionListProcessAction {
  type: ActionTypes.SET_FAVORITE_COLLECTION_LIST_PROCESS;
  payload: 'loading' | 'confirmed' | 'error';
}

export interface ISetFavoriteArtsIdListAction {
  type: ActionTypes.SET_FAVORITE_ARTS_ID_LIST;
  payload: number[];
}

export const setFavoriteCollectionList = (
  payload: IArtInfo[]
): ISetFavoriteCollectionListAction => ({
  type: ActionTypes.SET_FAVORITE_COLLECTION_LIST,
  payload,
});

export const setFavoriteCollectionListProcess = (
  payload: 'loading' | 'confirmed' | 'error'
): ISetFavoriteCollectionListProcessAction => ({
  type: ActionTypes.SET_FAVORITE_COLLECTION_LIST_PROCESS,
  payload,
});

export const setFavoriteArtsIdList = (payload: number[]): ISetFavoriteArtsIdListAction => ({
  type: ActionTypes.SET_FAVORITE_ARTS_ID_LIST,
  payload,
});
