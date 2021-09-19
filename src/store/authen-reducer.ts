import { User } from "../types/user";
import { AuthenActionType, types } from "./authen-action";
import * as _ from 'lodash';


export interface AuthenStateType {
    user: User | null;
};

export const initalAuthenState: AuthenStateType = {
    user: null
};
const reducer = (state: AuthenStateType = initalAuthenState, action: AuthenActionType): AuthenStateType => {
    switch (action.type) {
        case types.LOGIN:
            return  _.cloneDeep({...state, user:action.payload});
        case types.LOGOUT:
            return {
                user: null
            };
        default:
            return state;
    }
}

export default reducer;