// Action Types
export const FETCH_HOTELS = 'FETCH_HOTELS';
export const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';
export const FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE';
export const CREATE_HOTEL = 'CREATE_HOTEL';
export const CREATE_HOTEL_SUCCESS = 'CREATE_HOTEL_SUCCESS';
export const CREATE_HOTEL_FAILURE = 'CREATE_HOTEL_FAILURE';

// Actions Interfaces
export interface FetchHotelsAction {
  type: typeof FETCH_HOTELS;
}

export interface FetchHotelsSuccessAction {
  type: typeof FETCH_HOTELS_SUCCESS;
  payload: Hotel[];
}

export interface FetchHotelsFailureAction {
  type: typeof FETCH_HOTELS_FAILURE;
  payload: string;
}

export interface CreateHotelAction {
  type: typeof CREATE_HOTEL;
  payload: Hotel;
}

export interface CreateHotelSuccessAction {
  type: typeof CREATE_HOTEL_SUCCESS;
  payload: Hotel;
}

export interface CreateHotelFailureAction {
  type: typeof CREATE_HOTEL_FAILURE;
  payload: string;
}

export type HotelActionTypes = FetchHotelsAction | FetchHotelsSuccessAction | FetchHotelsFailureAction | CreateHotelAction | CreateHotelSuccessAction | CreateHotelFailureAction;

// State Type
export interface Hotel {
  id: number;
  title: string;
  createdDate: string;
  isLiked: boolean;
  text: string;
  imageUrl: string;
}

export interface HotelState {
  hotels: Hotel[];
  loading: boolean;
  error: string | null;
}


export interface HotelApiResponse {
    data: Hotel[];
    message?: string;
  }
  
  export interface SingleHotelApiResponse {
    data: Hotel;
    message?: string;
  }