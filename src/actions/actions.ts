import * as ACTION_TYPES from "actions/actionTypes";

export type MapActionType = {
  type: keyof typeof ACTION_TYPES.GetMapActionTypes;
  payload?: any;
};

export const getMapInfoStart = (): MapActionType => ({
  type: ACTION_TYPES.GET_MAP_INFO_START,
});

export const getMapInfoRequest = (): MapActionType => ({
  type: ACTION_TYPES.GET_MAP_INFO_REQUEST,
});

export const getMapInfoSuccess = (mapInfo: any): MapActionType => ({
  type: ACTION_TYPES.GET_MAP_INFO_SUCCESS,
  payload: mapInfo,
});

export const getMapInfoFailed = (error: string): MapActionType => ({
  type: ACTION_TYPES.GET_MAP_INFO_FAILED,
  payload: error,
});

export const getMapInfoFinished = (): MapActionType => ({
  type: ACTION_TYPES.GET_MAP_INFO_FINISHED,
});

export const updateCoordinates = (mapCoordinates: any): MapActionType => ({
  type: ACTION_TYPES.UPDATE_COORDINATES,
  payload: mapCoordinates,
});
