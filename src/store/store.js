import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
var store = createStore(rootReducer);
export default store;
