import { Card, Spin } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../../store/middlware';
import './Chat.scss';

const mapStateToProps = state => ({
  messages: state.messages,
  isLoading: state.isLoading,
  error: state.error,
});

export const Chat = connect(mapStateToProps, { getMessages })(
  ({ messages, getMessages, isLoading }) => {
    useEffect(() => {
      getMessages();
    }, [getMessages]);

    if (isLoading) {
      return (
        <div className='chat center'>
          <Spin size='large' />
        </div>
      );
    }

    if (!messages.length) {
      return (
        <div className='chat center'>
          <p>Sorry, no message for you!</p>
        </div>
      );
    }

    return (
      <div className='chat'>
        {messages.map(({ name, message, _id }) => (
          <Card key={_id} title={name} style={{ width: '80%' }}>
            <p>{message}</p>
          </Card>
        ))}
      </div>
    );
  },
);
