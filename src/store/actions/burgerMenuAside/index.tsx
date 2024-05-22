export enum ActionTypes {
  SET_ASIDE_MODE = 'SET_ASIDE_MODE',
}

export interface ISetAsideModeAction {
  type: ActionTypes.SET_ASIDE_MODE;
  payload: boolean;
}

export const setAsideMode = (payload: boolean): ISetAsideModeAction => ({
  type: ActionTypes.SET_ASIDE_MODE,
  payload,
});
