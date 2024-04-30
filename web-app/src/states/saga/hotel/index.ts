import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import * as actionTypes from "../../types/hotel";
import * as actions from "../../actions/hotel";
import { HotelApiResponse, SingleHotelApiResponse } from "../../types/hotel";

// Fetch Hotels Saga
function* fetchHotelsSaga(): Generator<
  any,
  void,
  AxiosResponse<HotelApiResponse>
> {
  try {
    const response: AxiosResponse<HotelApiResponse> = yield call(
      axios.get,
      `${process.env.REACT_APP_API_URL}/hotels`
    );
    yield put(actions.fetchHotelsSuccess(response.data as unknown as actionTypes.Hotel[]));
  } catch (error: any) {
    yield put(actions.fetchHotelsFailure(error.message));
  }
}

// Create Hotel Saga
function* createHotelSaga(
  action: actionTypes.CreateHotelAction
): Generator<any, void, AxiosResponse<SingleHotelApiResponse>> {
  try {
    const response: AxiosResponse<SingleHotelApiResponse> = yield call(
      axios.post,
      `${process.env.REACT_APP_API_URL}/hotels`,
      action.payload
    );
    yield put(actions.createHotelSuccess(response.data.data));
  } catch (error: any) {
    yield put(actions.createHotelFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery(actionTypes.FETCH_HOTELS, fetchHotelsSaga);
  yield takeEvery(actionTypes.CREATE_HOTEL, createHotelSaga);
}
