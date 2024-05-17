import { createStore } from 'redux';

const initialState = {
  process: '',
  artsGalleryList: [],
  artsGalleryPage: 0,
  artsGalleryAllPages: 0,
  artsCollectionList: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_PROCESS':
      return {
        ...state,
        process: action.payload,
      };
    case 'SET_ARTS_GALLERY_LIST':
      return {
        ...state,
        artsGalleryList: action.payload,
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
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
