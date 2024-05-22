import { createStore } from 'redux';

import rootReducer from '@store/reducers/index.js';

const store = createStore(rootReducer);

export default store;
