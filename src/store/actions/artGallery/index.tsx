import { IArtInfo } from '../../../services/ArtService';

export enum ActionTypes {
  SET_ARTS_GALLERY_SEARCH = 'SET_ARTS_GALLERY_SEARCH',
  SET_ARTS_GALLERY_SORT_OPTION = 'SET_ARTS_GALLERY_SORT_OPTION',
  SET_ARTS_GALLERY_LIST = 'SET_ARTS_GALLERY_LIST',
  SET_ARTS_GALLERY_LIST_PROCESS = 'SET_ARTS_GALLERY_LIST_PROCESS',
  SET_ARTS_GALLERY_PAGE = 'SET_ARTS_GALLERY_PAGE',
  SET_ARTS_GALLERY_ALL_PAGES = 'SET_ARTS_GALLERY_ALL_PAGES',
}

export interface ISetArtsGallerySearchAction {
  type: ActionTypes.SET_ARTS_GALLERY_SEARCH;
  payload: string;
}

export interface ISetArtsGallerySortOptionAction {
  type: ActionTypes.SET_ARTS_GALLERY_SORT_OPTION;
  payload: string;
}

export interface ISetArtsGalleryListAction {
  type: ActionTypes.SET_ARTS_GALLERY_LIST;
  payload: IArtInfo[];
}

export interface ISetArtsGalleryListProcessAction {
  type: ActionTypes.SET_ARTS_GALLERY_LIST_PROCESS;
  payload: 'loading' | 'confirmed' | 'error';
}

export interface ISetArtsGalleryPageAction {
  type: ActionTypes.SET_ARTS_GALLERY_PAGE;
  payload: number;
}

export interface ISetArtsGalleryAllPagesAction {
  type: ActionTypes.SET_ARTS_GALLERY_ALL_PAGES;
  payload: number;
}

export const setArtsGallerySearch = (payload: string): ISetArtsGallerySearchAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_SEARCH,
  payload,
});

export const setArtsGallerySortOption = (payload: string): ISetArtsGallerySortOptionAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_SORT_OPTION,
  payload,
});

export const setArtsGalleryList = (payload: IArtInfo[]): ISetArtsGalleryListAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_LIST,
  payload,
});

export const setArtsGalleryListProcess = (
  payload: 'loading' | 'confirmed' | 'error'
): ISetArtsGalleryListProcessAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_LIST_PROCESS,
  payload,
});

export const setArtsGalleryPage = (payload: number): ISetArtsGalleryPageAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_PAGE,
  payload,
});

export const setArtsGalleryAllPages = (payload: number): ISetArtsGalleryAllPagesAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_ALL_PAGES,
  payload,
});
