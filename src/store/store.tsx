import { createStore } from 'redux';

const initialState = {
  artsGallerySearch: '',
  artsGallerySortOption: 'default',
  artsGalleryList: [],
  artsGalleryListProcess: 'loading',
  artsGalleryPage: 0,
  artsGalleryAllPages: 0,
  artsCollectionList: [],
  artsCollectionListProcess: 'loading',
  artByID: {},
  artByIDProcess: 'confirmed',
  artsFavoriteCollectionList: [],
  artsFavoriteCollectionListProcess: 'loading',
  // @ts-ignore
  favoriteArtsIdList: JSON.parse(localStorage.getItem('favoriteArtsIdList')) || [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_ARTS_GALLERY_SEARCH':
      return {
        ...state,
        artsGallerySearch: action.payload,
      };
    case 'SET_ARTS_GALLERY_SORT_OPTION':
      return {
        ...state,
        artsGallerySortOption: action.payload,
      };
    case 'SET_ARTS_GALLERY_LIST':
      return {
        ...state,
        artsGalleryList: action.payload,
      };
    case 'SET_ARTS_GALLERY_LIST_PROCESS':
      return {
        ...state,
        artsGalleryListProcess: action.payload,
      };
    case 'SET_ARTS_GALLERY_PAGE':
      return {
        ...state,
        artsGalleryPage: action.payload,
      };
    case 'SET_ARTS_GALLERY_ALL_PAGES':
      return {
        ...state,
        artsGalleryAllPages: action.payload,
      };
    case 'SET_ARTS_COLLECTION_LIST':
      return {
        ...state,
        artsCollectionList: action.payload,
      };
    case 'SET_ARTS_COLLECTION_LIST_PROCESS':
      return {
        ...state,
        artsCollectionListProcess: action.payload,
      };
    case 'SET_ART_BY_ID':
      return {
        ...state,
        artByID: action.payload,
      };
    case 'SET_ART_BY_ID_PROCESS':
      return {
        ...state,
        artByIDProcess: action.payload,
      };
    case 'SET_FAVORITE_COLLECTION_LIST':
      return {
        ...state,
        artsFavoriteCollectionList: action.payload,
      };
    case 'SET_FAVORITE_COLLECTION_LIST_PROCESS':
      return {
        ...state,
        artsFavoriteCollectionListProcess: action.payload,
      };
    case 'SET_FAVORITE_ARTS_ID_LIST':
      return {
        ...state,
        favoriteArtsIdList: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
