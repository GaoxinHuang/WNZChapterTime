import * as React from 'react';
import AccountForm from '../components/account-form/AccountForm';
import { User } from '../types/user';
import { RegisterUserApi } from '../contexts/mock-user-api';
import { Link, useHistory } from 'react-router-dom';


const RegisterComponent: React.FC = () => {
    const history = useHistory();
    const register = (user: User): void => {
        RegisterUserApi(user);
        history.push('/login');
    }
    return <React.Fragment>
        <h1>Register</h1>
        <AccountForm onFinish={register} />

        {/* 用router 的link 
        <Anchor affix={false} onClick={()=> {alert("d")}}>
            <Anchor.Link href='' title="If already have an account, sign in" />
        </Anchor> */}
        <Link to='/login'>If already have an account, sign in in there</Link>
    </React.Fragment>
}
export default RegisterComponent;
