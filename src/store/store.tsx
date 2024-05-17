import { createStore } from 'redux';

const initialState = {
  process: '',
  artsList: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_PROCESS':
      return {
        ...state,
        process: action.payload,
      };
    case 'SET_ARTS_LIST':
      return {
        ...state,
        artsList: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
