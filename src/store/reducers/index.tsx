import { combineReducers } from 'redux';
import { BurgerMenuAsideState, burgerMenuAsideReducer } from './burgerMenuAside/index.js';
import { ArtsGalleryState, artsGalleryReducer } from './artGallery/index.js';
import { ArtsCollectionState, artsCollectionReducer } from './artsCollection/index.js';
import { ArtByIdState, artByIdReducer } from './artById/index.js';
import { FavoriteState, favoriteReducer } from './artsFavoriteCollection/index.js';

export interface RootState {
  burgerMenuAside: BurgerMenuAsideState;
  artsGallery: ArtsGalleryState;
  artsCollection: ArtsCollectionState;
  artById: ArtByIdState;
  favorite: FavoriteState;
}

const rootReducer = combineReducers({
  burgerMenuAside: burgerMenuAsideReducer,
  artsGallery: artsGalleryReducer,
  artsCollection: artsCollectionReducer,
  artById: artByIdReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
