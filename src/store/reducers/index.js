import { combineReducers } from 'redux';
import { burgerMenuAsideReducer } from '@store/reducers/burgerMenuAside/index.js';
import { artsGalleryReducer } from '@store/reducers/artGallery/index.js';
import { artsCollectionReducer } from '@store/reducers/artsCollection/index.js';
import { artByIdReducer } from '@store/reducers/artById/index.js';
import { favoriteReducer } from '@store/reducers/artsFavoriteCollection/index.js';
var rootReducer = combineReducers({
  burgerMenuAside: burgerMenuAsideReducer,
  artsGallery: artsGalleryReducer,
  artsCollection: artsCollectionReducer,
  artById: artByIdReducer,
  favorite: favoriteReducer,
});
export default rootReducer;
