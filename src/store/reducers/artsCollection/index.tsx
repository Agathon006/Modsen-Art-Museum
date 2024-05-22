import { IArtInfo } from '@services/ArtService';
import { ActionTypes } from '@store/actions/artsCollection/index.js';
import {
  ISetArtsCollectionListAction,
  ISetArtsCollectionListProcessAction,
} from '@store/actions/artsCollection/index.js';

export interface IArtsCollectionState {
  artsCollectionList: IArtInfo[];
  artsCollectionListProcess: 'loading' | 'confirmed' | 'error';
}

const initialState: IArtsCollectionState = {
  artsCollectionList: [],
  artsCollectionListProcess: 'loading',
};

export const artsCollectionReducer = (
  state = initialState,
  action: ISetArtsCollectionListAction | ISetArtsCollectionListProcessAction
) => {
  switch (action.type) {
    case ActionTypes.SET_ARTS_COLLECTION_LIST:
      return {
        ...state,
        artsCollectionList: action.payload,
      };
    case ActionTypes.SET_ARTS_COLLECTION_LIST_PROCESS:
      return {
        ...state,
        artsCollectionListProcess: action.payload,
      };
    default:
      return state;
  }
};
