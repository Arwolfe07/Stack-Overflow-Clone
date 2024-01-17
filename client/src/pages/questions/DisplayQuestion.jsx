import React from 'react'
import LeftsideBar from '../../components/leftsideBar/LeftsideBar';
import RightsideBar from '../../components/rightsideBar/RightsideBar';
import QuestionDetails from './QuestionDetails';

const DisplayQuestion = () => {
    return (
        <div className='home-container-1'>
            <LeftsideBar />
            <div className='home-container-2'>
                <QuestionDetails />
                <RightsideBar />
            </div>
        </div>
    )
}

export default DisplayQuestion;