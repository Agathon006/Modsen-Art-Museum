import { ActionTypes } from '../../actions/artsCollection/index.js';
import {
  ISetArtsCollectionListAction,
  ISetArtsCollectionListProcessAction,
} from '../../actions/artsCollection/index.js';

export interface IArtsCollectionState {
  artsCollectionList: any[];
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
