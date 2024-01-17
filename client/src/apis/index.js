import axios from 'axios';
// https://stack-backend-i4ps.onrender.com
const API = axios.create({ baseURL: 'https://stack-backend-i4ps.onrender.com' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/ask', questionData);
export const getQuestions = () => API.get('/questions/getAllQuestions');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, { value, userId });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId });
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const getAllUsers = () => API.get('/user/allUsers');
export const updateProfile = (id, updateProfileData) => API.patch(`/user/allUsers/${id}`, updateProfileData)

export const sendEmail = (id) => API.post(`/user/sendVerify/${id}`);
export const verifyUser = (id) => API.patch(`/user/verify/${id}`);

export const subscription = (token, tier, user) => API.post('/payment/checkout', { token, tier, user });

export const makeAPost = (postData) => API.post('/community/post', postData);
export const getPosts = () => API.get('/community/getAllPosts');
export const likePost = (postId, userId, value) => API.patch('/community/like', { value, userId, postId });

export const getFriends = (id) => API.get(`/user/friends/${id}`);
export const addFriend = (id, friendId) => API.put(`/user/friend/${id}`, { friendId });
export const removeFriend = (id, friendId) => API.patch(`/user/friend/${id}`, { friendId });
