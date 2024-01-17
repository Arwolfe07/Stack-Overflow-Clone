import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionList from './QuestionList';
import './MainBar.css';
import { useSelector } from 'react-redux';

// const dummy_ques = [
//   {
//     _id: '1',
//     upvotes: 3,
//     downvotes: 2,
//     noOfAnswers: 0,
//     questionTitle: "What is a function?",
//     questionBody: "Its meant to be",
//     questionTags: ["javascript", "R", "python"],
//     userPosted: "Aditya",
//     userId: 1,
//     askedOn: "2 Feb",
//     answer: [{
//       answerBody: "Answer",
//       userAnswered: "Mr.gates",
//       answeredOn: "23 Feb",
//       userId: 2
//     }]
//   }, {
//     _id: '2',
//     upvotes: 3,
//     downvotes: 2,
//     noOfAnswers: 0,
//     questionTitle: "What is a function?",
//     questionBody: "Its meant to be",
//     questionTags: ["javascript", "R", "python"],
//     userPosted: "Aditya",
//     userId: 1,
//     askedOn: "2 Feb",
//     answer: [{
//       answerBody: "Answer",
//       userAnswered: "Mr.gates",
//       answeredOn: "23 Feb",
//       userId: 2
//     }]
//   }, {
//     _id: '3',
//     upvotes: 3,
//     downvotes: 2,
//     noOfAnswers: 0,
//     questionTitle: "What is a function?",
//     questionBody: "Its meant to be",
//     questionTags: ["javascript", "R", "python"],
//     userPosted: "Aditya",
//     userId: 1,
//     askedOn: "2 Feb",
//     answer: [{
//       answerBody: "Answer",
//       userAnswered: "Mr.gates",
//       answeredOn: "23 Feb",
//       userId: 2
//     }]
//   }
// ]

const MainBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(state => state.currentUserReducer);

  const questions = useSelector(state => state.questionReducer);


  const checkAuthHandler = () => {
    if (user == null) {
      alert("Login or Signup to ask a question!");
      navigate('/auth');
    }
    else {
      navigate('/askquestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuthHandler} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {questions.data=== null ? <h1>Loading...</h1> :
          <>
            <p>{questions.data.length} questions</p>
            <QuestionList questionList={questions.data} />
          </>
        }

      </div>
      
    </div>
  )
}

export default MainBar;