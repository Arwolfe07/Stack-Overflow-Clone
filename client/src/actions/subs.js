import * as api from '../apis';

export const sendSubs = (token,tier,user,navigate) => async (dispatch) => {
    try {
        const {data} = await api.subscription(token,tier,user);
        // dispatch({type: 'SUBSCRIPTION',payload: data})
        dispatch({type: 'LOGOUT'});
        navigate('/auth');

        alert("Login again to use current purchased tier");
    }
    catch (error) {
        console.log(error);
    }
}