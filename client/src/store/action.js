export const SET_MESSAGES = 'SET_MESSAGES';
export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const ADD_MESSAGE = 'ADD_MASSAGE';

export const setMessages = payload => ({
  type: SET_MESSAGES,
  payload,
});

export const addMessage = payload => ({
  type: ADD_MESSAGE,
  payload,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const endLoading = () => ({
  type: END_LOADING,
});

export const setError = payload => ({
  type: SET_ERROR,
  payload,
});
