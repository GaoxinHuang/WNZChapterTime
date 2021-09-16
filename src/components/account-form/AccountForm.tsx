import { Button, Form } from 'antd';
import * as React from 'react';
import { User } from '../../types/user';
import FormInput from '../shared/FormInput';

const AccountForm : React.FC = ()=>{
    const onFinish = (user: User) => {
        console.log('Success:', user);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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