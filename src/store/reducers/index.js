import { combineReducers } from 'redux';
import { burgerMenuAsideReducer } from './burgerMenuAside/index.js';
import { artsGalleryReducer } from './artGallery/index.js';
import { artsCollectionReducer } from './artsCollection/index.js';
import { artByIdReducer } from './artById/index.js';
import { favoriteReducer } from './artsFavoriteCollection/index.js';
var rootReducer = combineReducers({
  burgerMenuAside: burgerMenuAsideReducer,
  artsGallery: artsGalleryReducer,
  artsCollection: artsCollectionReducer,
  artById: artByIdReducer,
  favorite: favoriteReducer,
});
export default rootReducer;
