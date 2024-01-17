import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SubscriptionTiers from './SubscriptionTiers';
import './SubscriptionPage.css';
import { useNavigate } from 'react-router-dom';

const TierInfo = [{ id: 1, plan: "Free Plan", noOfQuestions: 1, details: "Post 1 Question/day", pricePerMonth: 0},
{ id: 2, plan: "Silver Plan", noOfQuestions: 5, details: "Post 5 Questions/day", pricePerMonth: 100},
{ id: 3, plan: "Gold Plan", noOfQuestions: 1000, details: "Post Unlimited Questions", pricePerMonth: 1000}
]

const SubscriptionPage = () => {
    const user = useSelector(state => state.currentUserReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className='subs-container-1'>
            <h1>Choose a plan to continue</h1>
            <div className='subs-container-2'>
                {TierInfo.map((tier)=>(
                        <SubscriptionTiers dispatch={dispatch} navigate={navigate} user={user?.result} tier={tier} key={tier.id}/>
                    ))}
            </div>
        </div>
    )
}

export default SubscriptionPage