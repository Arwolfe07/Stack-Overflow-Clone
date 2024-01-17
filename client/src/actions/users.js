import * as api from '../apis';

export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getAllUsers();
        dispatch({ type: 'FETCH_USERS', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatedProfile = (id, updateProfileData) => async (dispatch) => {
    try {
        const { data } = await api.updateProfile(id, updateProfileData);
        dispatch({ type: 'UPDATE_PROFILE', payload: data });
    } catch (error) {
        console.log(error);
    }
}