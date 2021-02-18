import { LOGIN, LOGOUT } from "../constantes/user"

export const logUser = () => ({
    type: LOGIN
});

export const logoutUser = () => ({
    type: LOGOUT
});