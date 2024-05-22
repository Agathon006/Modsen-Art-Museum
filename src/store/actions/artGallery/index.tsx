export enum ActionTypes {
  SET_ARTS_GALLERY_SEARCH = 'SET_ARTS_GALLERY_SEARCH',
  SET_ARTS_GALLERY_SORT_OPTION = 'SET_ARTS_GALLERY_SORT_OPTION',
  SET_ARTS_GALLERY_LIST = 'SET_ARTS_GALLERY_LIST',
  SET_ARTS_GALLERY_LIST_PROCESS = 'SET_ARTS_GALLERY_LIST_PROCESS',
  SET_ARTS_GALLERY_PAGE = 'SET_ARTS_GALLERY_PAGE',
  SET_ARTS_GALLERY_ALL_PAGES = 'SET_ARTS_GALLERY_ALL_PAGES',
}

export interface SetArtsGallerySearchAction {
  type: ActionTypes.SET_ARTS_GALLERY_SEARCH;
  payload: string;
}

export interface SetArtsGallerySortOptionAction {
  type: ActionTypes.SET_ARTS_GALLERY_SORT_OPTION;
  payload: string;
}

export interface SetArtsGalleryListAction {
  type: ActionTypes.SET_ARTS_GALLERY_LIST;
  payload: any[];
}

export interface SetArtsGalleryListProcessAction {
  type: ActionTypes.SET_ARTS_GALLERY_LIST_PROCESS;
  payload: 'loading' | 'confirmed' | 'error';
}

export interface SetArtsGalleryPageAction {
  type: ActionTypes.SET_ARTS_GALLERY_PAGE;
  payload: number;
}

export interface SetArtsGalleryAllPagesAction {
  type: ActionTypes.SET_ARTS_GALLERY_ALL_PAGES;
  payload: number;
}

export const setArtsGallerySearch = (payload: string): SetArtsGallerySearchAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_SEARCH,
  payload,
});

export const setArtsGallerySortOption = (payload: string): SetArtsGallerySortOptionAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_SORT_OPTION,
  payload,
});

export const setArtsGalleryList = (payload: any[]): SetArtsGalleryListAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_LIST,
  payload,
});

export const setArtsGalleryListProcess = (
  payload: 'loading' | 'confirmed' | 'error'
): SetArtsGalleryListProcessAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_LIST_PROCESS,
  payload,
});

export const setArtsGalleryPage = (payload: number): SetArtsGalleryPageAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_PAGE,
  payload,
});

export const setArtsGalleryAllPages = (payload: number): SetArtsGalleryAllPagesAction => ({
  type: ActionTypes.SET_ARTS_GALLERY_ALL_PAGES,
  payload,
});
