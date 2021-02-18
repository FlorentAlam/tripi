import { Action } from "redux";
import { LOGIN, LOGOUT } from '../constantes/user';

type User = {
    isLogged: boolean;
}

const initialState: User = {
    isLogged: false
}

const userReducer = (state = initialState, action: Action) => {
    switch(action.type){
        case LOGIN: {
            return {...state, isLogged: true}
        }
        case LOGOUT: {
            return {...state, isLogged: false}
        }
        default: {
            return state;
        }
    }
}

export default userReducer;