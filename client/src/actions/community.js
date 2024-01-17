import * as api from '../apis';

export const makePost = (postData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.makeAPost(postData);
        dispatch({ type: 'CREATE_POST', payload: data });
        dispatch(getPosts());
        navigate('/community');
    } catch (error) {
        console.log(error);
    }
}

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts();
        dispatch({ type: "FETCH_ALL_POSTS", payload: data });
        dispatch(getPosts());
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (postId, userId, value) => async (dispatch) => {
    try {
        const { data } = await api.likePost(postId, userId, value);
        dispatch(getPosts());
    } catch (error) {
        console.log(error);
    }
}