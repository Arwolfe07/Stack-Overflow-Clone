import * as api from '../apis';

export const sendEmail = (id) => async (dispatch) => {
    try {
        // console.log(id);
        const { data } = await api.sendEmail(id);
        dispatch({ type: 'FETCH_OTP', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const verifyUser = (id, navigate) => async (dispatch) => {
    try {
        const { data } = await api.verifyUser(id);
        dispatch({ type: 'LOGOUT' });
        navigate('/auth');
        alert("Login again to use chatbox");
        window.location.reload();

    } catch (error) {
        console.log(error);
    }
}