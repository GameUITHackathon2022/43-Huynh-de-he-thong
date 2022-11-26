import * as api from "../apis";

import {FETCH_CAMP, START_LOADING_CAMPAIGN, FETCH_CAMP_BY_ID} from '../constraint/actionTypes'

export const getCamp = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_CAMPAIGN });

    const { data } = await api.getCamp();
    dispatch({
      type: FETCH_CAMP,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getCampById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_CAMPAIGN });

    const { data } = await api.getCampById(id);
    dispatch({
      type: FETCH_CAMP_BY_ID,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};


