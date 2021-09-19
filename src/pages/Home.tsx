import * as React from 'react';
import { useAuthContext } from '../contexts/authen-context';
import { useHistory } from "react-router-dom";
import { Button } from 'antd';
import { removeAuthen } from '../store/authen-action';

const HomeComponent: React.FC = () => {
    const { state, dispatch } = useAuthContext();
    const history = useHistory();
    const logout = ()=>{
        removeAuthen(dispatch);
    }
    if (!state.user) {
        history.push('/login');
    }
    const username = state.user?.username;
    return <React.Fragment>
        <h1>Hi, {username}</h1>
        <Button type="link" onClick={logout}>Logout</Button>
    </React.Fragment>;
}

export default HomeComponent;
