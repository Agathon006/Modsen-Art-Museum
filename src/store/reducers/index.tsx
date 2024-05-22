import { combineReducers } from 'redux';
import { IBurgerMenuAsideState, burgerMenuAsideReducer } from './burgerMenuAside/index.js';
import { IArtsGalleryState, artsGalleryReducer } from './artGallery/index.js';
import { IArtsCollectionState, artsCollectionReducer } from './artsCollection/index.js';
import { IArtByIdState, artByIdReducer } from './artById/index.js';
import { IFavoriteState, favoriteReducer } from './artsFavoriteCollection/index.js';

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
