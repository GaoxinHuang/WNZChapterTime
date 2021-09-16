import { Form, Input } from 'antd';
import { Rule } from 'rc-field-form/lib/interface';
import React from 'react';
interface FormInputProps {
    isPassword?: boolean;
    name: string;
    label: string;
    rules: Rule[];
}

const FormInput: React.FC<FormInputProps> = (props) => {
    return <Form.Item
        label={props.label}
        name={props.name}
        rules={props.rules}
    >
        {props.isPassword ? <Input.Password /> : <Input />}
    </Form.Item>;
}

export default FormInput;