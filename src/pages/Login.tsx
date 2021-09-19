import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AccountForm from '../components/account-form/AccountForm';
import { LoginApi } from '../contexts/mock-user-api';
import { User } from '../types/user';
import { Typography } from 'antd';
import { useAuthContext } from '../contexts/authen-context';
import { addAuthen } from '../store/authen-action';
const LoginComponent: React.FC = () => {
    const [error, setError] = React.useState(false);
    const { dispatch } = useAuthContext();
    const history = useHistory();
    const login = (user: User): void => {
        const success = LoginApi(user);
        if (success) {
            addAuthen(dispatch, user);
            history.push('/');
        } else {
            setError(true);
        }
    }
    return <React.Fragment>
        <h1>Login</h1>
        {error ? <Typography.Text type="danger">Login unsuccessfully. Please check username and password</Typography.Text> : null}
        <AccountForm onFinish={login} />
        <Link to="/register">Or Sign up</Link>
    </React.Fragment>;
}


export default LoginComponent;
