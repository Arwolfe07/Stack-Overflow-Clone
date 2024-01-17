import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { askQuestion } from '../../actions/question';
import "./AskQuestion.css";

const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionBody, setQuestionBody] = useState('');
    const [questionTags, setQuestionTags] = useState('');
    const user = useSelector((state) => state.currentUserReducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        if(user.result.noOfQuestions > 0)
        {
            dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: user.result.name, userId: user?.result?._id }, navigate));
            user.result.noOfQuestions -=1;
        }else
        {
            alert("You have reached maximum number of questions allowed for free users.");
            navigate('/subs');
        }
    }

    const enterKeyHandler = (e) => {
        if (e.key === 'Enter') {
            setQuestionBody(questionBody + '\n');
        }
    }

    return (
        <div className='ask-question'>
            <div className='ask-ques-container'>
                <h1>Ask a public Question</h1>
                <form onSubmit={submitHandler}>
                    <div className='ask-form-container'>
                        <label htmlFor='ask-ques-title'>
                            <h4>Title</h4>
                            <p>Be specific and imagine you're asking a question to another person</p>
                            <input type='text' id='ask-ques-title' onChange={(e) => setQuestionTitle(e.target.value)}
                                placeholder='e.g. Is there an R function for finding the index of an element in a vector?' />
                        </label>
                        <label htmlFor='ask-ques-body'>
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea cols="30" rows="5" id='ask-ques-body' onChange={(e) => setQuestionBody(e.target.value)} onKeyPress={enterKeyHandler} />
                        </label>
                        <label htmlFor='ask-ques-tags'>
                            <h4>Tags</h4>
                            <p>Add upto 5 tags to describe what your question is about</p>
                            <input type='text' id='ask-ques-tags' placeholder='e.g. (xml typescript wordpress)' onChange={(e) => setQuestionTags(e.target.value.split(" "))} />
                        </label>
                    </div>
                    <input type='submit' value='Review your question' className='review-btn' />
                </form>
            </div>
        </div>
    )
}

export default AskQuestion;