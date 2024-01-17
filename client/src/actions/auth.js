import * as api from "../apis";
import { currentUser } from "./currentUser";

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData);
        dispatch({ type: 'AUTH', data });
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/subs');
    } catch (error) {
        console.log(error);
    }
    
};
export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData);
        dispatch({ type: 'AUTH', data });
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};