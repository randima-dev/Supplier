import * as actionTypes from '../../types/hotel';

const initialState: actionTypes.HotelState = {
  hotels: [],
  loading: false,
  error: null
};

export const hotelReducer = (state = initialState, action: actionTypes.HotelActionTypes): actionTypes.HotelState => {
  switch (action.type) {
    case actionTypes.FETCH_HOTELS:
      return { ...state, loading: true };
    case actionTypes.FETCH_HOTELS_SUCCESS:
      return { ...state, loading: false, hotels: action.payload };
    case actionTypes.FETCH_HOTELS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
