import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Avatar from '../../components/avatar/Avatar';
import moment from 'moment';
import copy from "copy-to-clipboard";
import { deleteAnswer } from '../../actions/question';

const DisplayAnswers = ({ question }) => {
    const locate = useLocation();
    const { id } = useParams();
    const url = 'https://stack-backend-i4ps.onrender.com';
    const user = useSelector(state => state.currentUserReducer);
    const dispatch = useDispatch();
    const shareHandler = () => {
        copy(url + locate.pathname);
        alert('Copied URL: ' + url + locate.pathname);
    }

    const deleteAnsHandler = (answerId, noOfAnswers) => {
        dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
    }

    return (
        <div>
            {
                question.answers.map((ans) => (
                    <div className='display-ans' key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className='question-action-user'>
                            <div>
                                <button type='button' onClick={shareHandler} >Share</button>
                                {ans.userId === user?.result?._id &&
                                    <button type='button' onClick={() => deleteAnsHandler(ans._id, question.noOfAnswers)}>Delete</button>
                                }
                            </div>
                            <div>
                                <p>Answered {moment(ans.answeredOn).fromNow()}</p>
                                <Link to={`/users/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                    <Avatar px="8px" py="5px" backgroundColor="green">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>{ans.userAnswered}</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default DisplayAnswers;