import { ActionTypes } from '../../actions/artById/index.js';
import { SetArtByIdAction, SetArtByIdProcessAction } from '../../actions/artById/index.js';

interface ArtByIdState {
  artByID: any;
  artByIDProcess: 'loading' | 'confirmed' | 'error';
}

const initialState: ArtByIdState = {
  artByID: {},
  artByIDProcess: 'confirmed',
};

export const artByIdReducer = (
  state = initialState,
  action: SetArtByIdAction | SetArtByIdProcessAction
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
