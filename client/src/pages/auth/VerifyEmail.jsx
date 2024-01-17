import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "./Auth.css";
import { sendEmail, verifyUser } from '../../actions/verify';

const VerifyEmail = () => {
    const user = useSelector(state => state.currentUserReducer);
    const otpRecieved = useSelector(state => state.verifyUserReducer)
    const [prog, setProg] = useState(false);
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const nextHandler = () => {
        dispatch(sendEmail(user?.result._id));
        setProg(!prog);
    }

    const submitOtpHandler = (e) =>{
        e.preventDefault();
        console.log(otpRecieved.otp);
        console.log(otp);

        if(otpRecieved.otp === otp)
        {
            console.log('in')
            dispatch(verifyUser(user?.result._id,navigate));
    
        }

    }

    return (
        <section className='auth-section'>

            <div className='auth-container-2'>
                <div className='verify-container'>
                    <form>
                        <h3>Verify Email</h3>
                        {!prog &&
                            <>
                                <p>An <span className='bolder'>OTP</span> will be send to <span className='bolder'>{user?.result?.email}</span>. Please click next to verify.</p>
                                <button type='button' className='auth-btn' onClick={nextHandler}>Next</button>
                            </>
                        }
                        {prog &&
                            <>
                                <p>An <span className='bolder'>OTP</span> has been sent to <span className='bolder'>{user?.result?.email}</span>. Please check your email.</p>
                                <label htmlFor='otp'>
                                    <h4>Enter 4 digit OTP</h4>
                                    <input id='otp' type='text' name='otp' onChange={(e)=>setOtp(e.target.value)}/>
                                </label>
                                <button type='submit' className='auth-btn' onClick={submitOtpHandler}>Verify OTP</button>
                            </>
                        }
                    </form>


                </div>

            </div>
        </section>
    )
}

export default VerifyEmail;