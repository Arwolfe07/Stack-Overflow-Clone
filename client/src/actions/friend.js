import * as api from '../apis';

export const getFriends = (id) => async (dispatch) => {
    try {
        const { data } = await api.getFriends(id);
        
        dispatch({ type: 'FETCH_FRIENDS', payload: data });
    } catch (error) {
        console.log(error);
    }

}

export const addFriend = (id, friendId,navigate) => async (dispatch) => {
    try {
        const { data } = await api.addFriend(id, friendId);
        dispatch(getFriends(id));
        navigate('/:id/friends');
    }
    catch (error) {
        console.log(error);
    }
}




export const removeFriend = (id, friendId) => async (dispatch) => {
    try {
        const { data } = await api.removeFriend(id, friendId);
        dispatch(getFriends(id));
    }
    catch (error) {
        console.log(error);
    }
}