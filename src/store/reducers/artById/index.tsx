import { ActionTypes } from '../../actions/artById/index.js';
import { ISetArtByIdAction, ISetArtByIdProcessAction } from '../../actions/artById/index.js';

export interface IArtByIdState {
  artByID: any;
  artByIDProcess: 'loading' | 'confirmed' | 'error';
}

const initialState: IArtByIdState = {
  artByID: {},
  artByIDProcess: 'confirmed',
};

export const artByIdReducer = (
  state = initialState,
  action: ISetArtByIdAction | ISetArtByIdProcessAction
) => {
  switch (action.type) {
    case ActionTypes.SET_ART_BY_ID:
      return {
        ...state,
        artByID: action.payload,
      };
    case ActionTypes.SET_ART_BY_ID_PROCESS:
      return {
        ...state,
        artByIDProcess: action.payload,
      };
    default:
      return state;
  }
};
