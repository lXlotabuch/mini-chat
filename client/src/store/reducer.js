import {
  ADD_MESSAGE,
  END_LOADING,
  SET_ERROR,
  SET_MESSAGES,
  START_LOADING,
} from './action';

const initialState = {
  messages: [],
  isLoading: false,
  error: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: payload,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [payload, ...state.messages],
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
