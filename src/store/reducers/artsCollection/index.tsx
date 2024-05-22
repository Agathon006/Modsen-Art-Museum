import { ActionTypes } from '../../actions/artsCollection/index.js';
import {
  SetArtsCollectionListAction,
  SetArtsCollectionListProcessAction,
} from '../../actions/artsCollection/index.js';

export interface ArtsCollectionState {
  artsCollectionList: any[];
  artsCollectionListProcess: 'loading' | 'confirmed' | 'error';
}

const initialState: ArtsCollectionState = {
  artsCollectionList: [],
  artsCollectionListProcess: 'loading',
};

export const artsCollectionReducer = (
  state = initialState,
  action: SetArtsCollectionListAction | SetArtsCollectionListProcessAction
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
