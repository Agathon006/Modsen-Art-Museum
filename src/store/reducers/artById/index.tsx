import { IArtInfo } from '@services/ArtService';
import { ActionTypes } from '@store/actions/artById/index.js';
import { ISetArtByIdAction, ISetArtByIdProcessAction } from '@store/actions/artById/index.js';

export interface IArtByIdState {
  artByID: IArtInfo;
  artByIDProcess: 'loading' | 'confirmed' | 'error';
}

const initialState: IArtByIdState = {
  artByID: {
    id: null,
    title: null,
    artist_title: null,
    is_public_domain: null,
    image_id: null,
  },
  artByIDProcess: 'loading',
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
