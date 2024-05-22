export enum ActionTypes {
  SET_ASIDE_MODE = 'SET_ASIDE_MODE',
}

export interface SetAsideModeAction {
  type: ActionTypes.SET_ASIDE_MODE;
  payload: boolean;
}

export const setAsideMode = (payload: boolean): SetAsideModeAction => ({
  type: ActionTypes.SET_ASIDE_MODE,
  payload,
});
