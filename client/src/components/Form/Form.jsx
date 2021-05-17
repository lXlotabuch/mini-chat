import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, message } from 'antd';
import { sendMessage } from '../../store/middlware';
import './Form.scss';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 4 },
};

export const FormMessage = connect(null, { sendMessage })(({ sendMessage }) => {
  const [form] = Form.useForm();

  const handleSubmit = async values => {
    const data = await sendMessage(values);
    if (data.error) {
      message.error(data.message);
    } else form.setFieldsValue({ message: null });
  };

  return (
    <Form
      form={form}
      {...layout}
      className='form-message'
      name='basic'
      initialValues={{ remember: true }}
      onFinish={handleSubmit}>
      <Form.Item
        label='Name'
        name='name'
        rules={[
          { required: true, message: 'Please input your name!' },
          {
            pattern: /^[a-zа-яіїё0-9_]+$/i,
            message: 'Uncorrect name',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Message'
        name='message'
        rules={[{ required: true, message: 'Please input your message!' }]}>
        <Input.TextArea autoSize={{ minRows: 2, maxRows: 5 }} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
});
