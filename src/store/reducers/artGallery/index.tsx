import { IArtInfo } from '../../../services/ArtService';
import { ActionTypes } from '../../actions/artGallery/index.js';
import {
  ISetArtsGallerySearchAction,
  ISetArtsGallerySortOptionAction,
  ISetArtsGalleryListAction,
  ISetArtsGalleryListProcessAction,
  ISetArtsGalleryPageAction,
  ISetArtsGalleryAllPagesAction,
} from '../../actions/artGallery/index.js';

export interface IArtsGalleryState {
  artsGallerySearch: string;
  artsGallerySortOption: string;
  artsGalleryList: IArtInfo[];
  artsGalleryListProcess: 'loading' | 'confirmed' | 'error';
  artsGalleryPage: number;
  artsGalleryAllPages: number;
}

const initialState: IArtsGalleryState = {
  artsGallerySearch: '',
  artsGallerySortOption: 'default',
  artsGalleryList: [],
  artsGalleryListProcess: 'loading',
  artsGalleryPage: 0,
  artsGalleryAllPages: 0,
};

export const artsGalleryReducer = (
  state = initialState,
  action:
    | ISetArtsGallerySearchAction
    | ISetArtsGallerySortOptionAction
    | ISetArtsGalleryListAction
    | ISetArtsGalleryListProcessAction
    | ISetArtsGalleryPageAction
    | ISetArtsGalleryAllPagesAction
) => {
  switch (action.type) {
    case ActionTypes.SET_ARTS_GALLERY_SEARCH:
      return {
        ...state,
        artsGallerySearch: action.payload,
      };
    case ActionTypes.SET_ARTS_GALLERY_SORT_OPTION:
      return {
        ...state,
        artsGallerySortOption: action.payload,
      };
    case ActionTypes.SET_ARTS_GALLERY_LIST:
      return {
        ...state,
        artsGalleryList: action.payload,
      };
    case ActionTypes.SET_ARTS_GALLERY_LIST_PROCESS:
      return {
        ...state,
        artsGalleryListProcess: action.payload,
      };
    case ActionTypes.SET_ARTS_GALLERY_PAGE:
      return {
        ...state,
        artsGalleryPage: action.payload,
      };
    case ActionTypes.SET_ARTS_GALLERY_ALL_PAGES:
      return {
        ...state,
        artsGalleryAllPages: action.payload,
      };
    default:
      return state;
  }
};
