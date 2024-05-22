import { ActionTypes } from '../../actions/burgerMenuAside/index.js';
import { ISetAsideModeAction } from '../../actions/burgerMenuAside/index.js';

export interface IBurgerMenuAsideState {
  asideMode: boolean;
}

const initialState: IBurgerMenuAsideState = {
  asideMode: false,
};

export const burgerMenuAsideReducer = (state = initialState, action: ISetAsideModeAction) => {
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
