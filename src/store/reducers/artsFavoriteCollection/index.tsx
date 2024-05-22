import { IArtInfo } from '../../../services/ArtService';
import { ActionTypes } from '../../actions/artsFavoriteCollection/index.js';
import {
  ISetFavoriteCollectionListAction,
  ISetFavoriteCollectionListProcessAction,
  ISetFavoriteArtsIdListAction,
} from '../../actions/artsFavoriteCollection/index.js';

export interface IFavoriteState {
  artsFavoriteCollectionList: IArtInfo[];
  artsFavoriteCollectionListProcess: 'loading' | 'confirmed' | 'error';
  favoriteArtsIdList: number[];
}

const initialState: IFavoriteState = {
  artsFavoriteCollectionList: [],
  artsFavoriteCollectionListProcess: 'loading',
  favoriteArtsIdList: JSON.parse(localStorage.getItem('favoriteArtsIdList') ?? '[]'),
};

export const favoriteReducer = (
  state = initialState,
  action:
    | ISetFavoriteCollectionListAction
    | ISetFavoriteCollectionListProcessAction
    | ISetFavoriteArtsIdListAction
) => {
  switch (action.type) {
    case ActionTypes.SET_FAVORITE_COLLECTION_LIST:
      return {
        ...state,
        artsFavoriteCollectionList: action.payload,
      };
    case ActionTypes.SET_FAVORITE_COLLECTION_LIST_PROCESS:
      return {
        ...state,
        artsFavoriteCollectionListProcess: action.payload,
      };
    case ActionTypes.SET_FAVORITE_ARTS_ID_LIST:
      return {
        ...state,
        favoriteArtsIdList: action.payload,
      };
    default:
      return state;
  }
};
