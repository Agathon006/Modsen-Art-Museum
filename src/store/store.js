import { createStore } from 'redux';
import rootReducer from '@store/reducers/index.js';
var store = createStore(rootReducer);
export default store;
