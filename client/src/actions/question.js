import * as api from '../apis';

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData);
        dispatch({ type: "POST_QUESTION", payload: data });
        dispatch(getQuestions());
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};

export const getQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.getQuestions();
        dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
        dispatch(getQuestions());
    } catch (error) {
        console.log(error);
    }
}

export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        const { data } = api.deleteQuestion(id);
        dispatch(getQuestions());
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const voteQuestion = (id, value, userId) => async (dispatch) => {
    try {
        const { data } = await api.voteQuestion(id, value, userId);
        dispatch(getQuestions());

    } catch (error) {
        console.log(error);
    }
}

export const postAnswers = (answerData) => async (dispatch) => {
    try {
        const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;
        const { data } = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered, userId);
        dispatch({ type: 'POST_ANSWER', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
    try {
        const { data } = await api.deleteAnswer(id, answerId, noOfAnswers);
        dispatch(getQuestions());
    } catch (error) {
        console.log(error);
    }
}
