import { message } from 'antd';
import {
  addMessage,
  endLoading,
  setError,
  setMessages,
  startLoading,
} from './action';

export const getMessages = () => async dispatch => {
  dispatch(startLoading());
  const res = await fetch('/posts');
  const data = await res.json();

  if (res.status === 200) {
    dispatch(setMessages(data));
  } else dispatch(setError(data));
  dispatch(endLoading());
};

export const sendMessage = values => async dispatch => {
  const res = await fetch('/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  const data = await res.json();

  if (res.status === 200) {
    message.success('Message send');
    dispatch(addMessage(data));
  }
  return data;
};
