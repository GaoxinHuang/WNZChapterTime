import { Button, Form } from 'antd';
import * as React from 'react';
import { User } from '../../types/user';
import FormInput from '../shared/FormInput';
import 'antd/dist/antd.css';

interface AccountFormProps {
    onFinish: (user: User) => void
}

const AccountForm: React.FC<AccountFormProps> = (props) => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            onFinish={props.onFinish}
        >
            <FormInput
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    {
                        min: 5,
                        message: 'Username should be more than 5'
                    }
                ]}
            />

            <FormInput
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                isPassword={true}
            />

            <Form.Item
                wrapperCol={{
                    offset: 10,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default AccountForm;