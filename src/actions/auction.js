import * as api from "../apis";

import {FETCH_AUCTION_BY_ID, START_LOADING_AUCTION, FETCH_AUCTION} from '../constraint/actionTypes'
export const getAuction = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_AUCTION });

    const { data } = await api.getAuction();
    dispatch({
      type: FETCH_AUCTION,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getAuctionById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_AUCTION });

    const { data } = await api.getAuctionById(id);
    dispatch({
      type: FETCH_AUCTION_BY_ID,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
};


