import * as React from "react";
import { ActionType } from "../types/ActionType";
import { User } from "../types/user";
export enum types {
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAILURE = 'REGISTER_FAILURE'
}



const login = (dispath: React.Dispatch<ActionType<types>>):void => {
    
}