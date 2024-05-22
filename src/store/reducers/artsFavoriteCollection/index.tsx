import { ActionTypes } from '../../actions/artsFavoriteCollection/index.js';
import {
  SetFavoriteCollectionListAction,
  SetFavoriteCollectionListProcessAction,
  SetFavoriteArtsIdListAction,
} from '../../actions/artsFavoriteCollection/index.js';

interface FavoriteState {
  artsFavoriteCollectionList: any[];
  artsFavoriteCollectionListProcess: 'loading' | 'success' | 'error';
  favoriteArtsIdList: number[];
}

const initialState: FavoriteState = {
  artsFavoriteCollectionList: [],
  artsFavoriteCollectionListProcess: 'loading',
  favoriteArtsIdList: JSON.parse(localStorage.getItem('favoriteArtsIdList') ?? '[]'),
};

export const favoriteReducer = (
  state = initialState,
  action:
    | SetFavoriteCollectionListAction
    | SetFavoriteCollectionListProcessAction
    | SetFavoriteArtsIdListAction
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
