import React, { useEffect } from 'react'
import LeftsideBar from '../../components/leftsideBar/LeftsideBar';
import './Friends.css'
import FriendList from './FriendList';
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from '../../actions/friend';
const Friends = () => {
    const user = useSelector(state => state.currentUserReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriends(user?.result?._id));
    })

    return (
        <div className='home-container-1'>
            <LeftsideBar />
            <div className='home-container-2' style={{ marginTop: "50px" }}>
                <h1 style={{ fontWeight: "400" }}>Your Friends</h1>
                <FriendList />:
            </div>
        </div>
    )
}

export default Friends;
