import { combineReducers } from 'redux';

import {
  IBurgerMenuAsideState,
  burgerMenuAsideReducer,
} from '@store/reducers/burgerMenuAside/index.js';
import { IArtsGalleryState, artsGalleryReducer } from '@store/reducers/artGallery/index.js';
import {
  IArtsCollectionState,
  artsCollectionReducer,
} from '@store/reducers/artsCollection/index.js';
import { IArtByIdState, artByIdReducer } from '@store/reducers/artById/index.js';
import { IFavoriteState, favoriteReducer } from '@store/reducers/artsFavoriteCollection/index.js';

export interface IRootState {
  burgerMenuAside: IBurgerMenuAsideState;
  artsGallery: IArtsGalleryState;
  artsCollection: IArtsCollectionState;
  artById: IArtByIdState;
  favorite: IFavoriteState;
}

const rootReducer = combineReducers({
  burgerMenuAside: burgerMenuAsideReducer,
  artsGallery: artsGalleryReducer,
  artsCollection: artsCollectionReducer,
  artById: artByIdReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
