import React from 'react'
import Question from './Question'

const QuestionList = ({ questionList }) => {
    return (
        <>
            {questionList.map((question) => (
                <Question question={question} />
            ))}
        </>
    )
}

export default QuestionList