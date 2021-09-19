import * as React from "react";
import { ActionType } from "../types/ActionType";
import { User } from "../types/user";
export enum types {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}

export type AuthenActionType = ActionType<types>;

export const addAuthen = (dispath: React.Dispatch<AuthenActionType>, user: User): void => {
    dispath({ type: types.LOGIN, payload: user });
}

export const removeAuthen = (dispatch: React.Dispatch<AuthenActionType>): void => {
    dispatch({ type: types.LOGOUT });
}

