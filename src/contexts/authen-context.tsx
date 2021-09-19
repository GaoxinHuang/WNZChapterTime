import * as React from 'react';
import { AuthenActionType } from '../store/authen-action';
import reducer, { AuthenStateType, initalAuthenState } from '../store/authen-reducer';

interface AuthenContextProps {
    state: AuthenStateType;
    dispatch: React.Dispatch<AuthenActionType>;
}

const AuthenContext = React.createContext<AuthenContextProps>({
    state: initalAuthenState,
    dispatch: () => initalAuthenState
})

export const useAuthContext = (): AuthenContextProps => {
    return React.useContext(AuthenContext);
}

export const AuthenContextProvider: React.FC<React.PropsWithChildren<any>> = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initalAuthenState);
    return <AuthenContext.Provider value={{ state, dispatch }}>{props.children}</AuthenContext.Provider>
}