import { ActionTypes } from '@store/actions/burgerMenuAside/index.js';
import { ISetAsideModeAction } from '@store/actions/burgerMenuAside/index.js';

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
