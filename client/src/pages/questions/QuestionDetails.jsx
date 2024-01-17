import React, { useState } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import copy from "copy-to-clipboard";

import upvote from '../../assets/sort-up.svg';
import downvote from '../../assets/sort-down.svg';
import './Questions.css';
import Avatar from '../../components/avatar/Avatar';
import DisplayAnswers from './DisplayAnswers';
import { postAnswers, deleteQuestion, voteQuestion } from '../../actions/question'

const QuestionDetails = () => {
    const [answer, setAnswer] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    var user = useSelector(state => state.currentUserReducer);
    const { id } = useParams();
    const questionList = useSelector(state => state.questionReducer);
    const locate = useLocation();
    const url = 'https://stack-backend-i4ps.onrender.com'

    const submitHandler = (e, answerNumbers) => {
        e.preventDefault();
        if (user === null) {
            alert("Login or signup to answer a question");
            navigate('/auth');
        }
        else {
            if (answer === '') {
                alert("Enter an answer before submitting");
            }
            else {
                dispatch(postAnswers({ id, noOfAnswers: answerNumbers + 1, answerBody: answer, userAnswered: user.result.name, userId: user.result._id }))
            }
        }
        setAnswer('');

    }

    const shareHandler = () => {
        copy(url + locate.pathname);
        alert('Copied URL: ' + url + locate.pathname);
    }

    const deleteHandler = () => {
        dispatch(deleteQuestion(id, navigate));
    }

    const upVoteHandler = () =>{
        dispatch(voteQuestion(id,'upVote',user.result._id));
    }
    const downVoteHandler = () =>{
        dispatch(voteQuestion(id,'downVote',user.result._id));
    }

    return (
        <div className='question-details-page'>
            {
                questionList.data === null ? <h1>Loading...</h1> :
                    <>
                        {
                            questionList.data.filter((ques => ques._id === id)).map((question) => (
                                <div id={question._id}>
                                    <section className='question-details-container'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className='question-votes'>
                                                <img src={upvote} alt='upvote' width='18' className='votes-icon' onClick={upVoteHandler}/>
                                                <p>{question.upVote.length - question.downVote.length}</p>
                                                <img src={downvote} alt='downvote' width='18' className='votes-icon' onClick={downVoteHandler}/>
                                            </div>
                                            <div style={{ width: "100%" }}>
                                                <p className='question-body'>{question.questionBody}</p>
                                                <div className='question-details-tags'>
                                                    {
                                                        question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className='question-action-user'>
                                                    <div>
                                                        <button type='button' onClick={shareHandler}>Share</button>
                                                        {user?.result?._id === question.userId && (
                                                            <button type='button' onClick={deleteHandler}>Delete</button>)}
                                                    </div>
                                                    <div>
                                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                                        <Link to={`/users/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                                            <Avatar px="8px" py="5px" backgroundColor="orange">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                            <div> {question.userPosted}</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {question.noOfAnswers !== 0 &&
                                        <section>
                                            <h3>{question.noOfAnswers} Answers</h3>
                                            <DisplayAnswers key={question._id} question={question} />
                                        </section>
                                    }

                                    <section className='post-answer-container'>
                                        <h3>Your Answer</h3>
                                        <form onSubmit={(e) => { submitHandler(e, question.answers.length) }}>
                                            <textarea onChange={(e) => setAnswer(e.target.value)} name='' id='' rows="10" cols="30"></textarea><br />
                                            <input type='submit' value="Post your Answer" className='post-ans-btn' />
                                        </form>
                                        <p>
                                            Browse other Question tagged
                                            {
                                                question.questionTags.map((tag) => (
                                                    <Link to='/tags' key={tag} className='ans-tags'>{tag}</Link>
                                                ))
                                            } or
                                            <Link to='/askquestion' style={{ textDecoration: 'none', color: '#009dff' }}> ask your own question.</Link>
                                        </p>
                                    </section>
                                </div>
                            ))
                        }
                    </>

            }
        </div>
    )
}

export default QuestionDetails;