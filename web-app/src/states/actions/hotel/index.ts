import * as actionTypes from "../../types/hotel";

export const fetchHotels = (): actionTypes.FetchHotelsAction => ({
  type: actionTypes.FETCH_HOTELS,
});

export const fetchHotelsSuccess = (
  hotels: actionTypes.Hotel[]
): actionTypes.FetchHotelsSuccessAction => ({
  type: actionTypes.FETCH_HOTELS_SUCCESS,
  payload: hotels,
});

export const fetchHotelsFailure = (
  error: string
): actionTypes.FetchHotelsFailureAction => ({
  type: actionTypes.FETCH_HOTELS_FAILURE,
  payload: error,
});

export const createHotel = (
  hotel: actionTypes.Hotel
): actionTypes.CreateHotelAction => ({
  type: actionTypes.CREATE_HOTEL,
  payload: hotel,
});

export const createHotelSuccess = (
  hotel: actionTypes.Hotel
): actionTypes.CreateHotelSuccessAction => ({
  type: actionTypes.CREATE_HOTEL_SUCCESS,
  payload: hotel,
});

export const createHotelFailure = (
  error: string
): actionTypes.CreateHotelFailureAction => ({
  type: actionTypes.CREATE_HOTEL_FAILURE,
  payload: error,
});
