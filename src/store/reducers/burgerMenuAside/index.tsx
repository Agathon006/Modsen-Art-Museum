import { ActionTypes } from '../../actions/burgerMenuAside/index.js';
import { SetAsideModeAction } from '../../actions/burgerMenuAside/index.js';

interface BurgerMenuAsideState {
  asideMode: boolean;
}

const initialState: BurgerMenuAsideState = {
  asideMode: false,
};

export const burgerMenuAsideReducer = (state = initialState, action: SetAsideModeAction) => {
  switch (action.type) {
    case ActionTypes.SET_ASIDE_MODE:
      return {
        ...state,
        asideMode: action.payload,
      };
    default:
      return state;
  }
};
