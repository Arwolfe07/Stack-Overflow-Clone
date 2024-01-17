import React, { useState } from 'react'
import LeftsideBar from '../../components/leftsideBar/LeftsideBar'
import Avatar from '../../components/avatar/Avatar';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faMinus, faPen, faPlus } from '@fortawesome/free-solid-svg-icons'

import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditProfileForm from './EditProfileForm';
import UserBio from './UserBio';
import './User.css';
import { addFriend, removeFriend } from '../../actions/friend';

const User = () => {
    const { id } = useParams();
    const users = useSelector(state => state.userReducer);
    const currentUser = useSelector(state => state.currentUserReducer);
    const friends = useSelector(state => state.friendReducer);
    const dispatch = useDispatch();
    const currentProfile = users.filter((user) => user._id === id)[0];
    const [switchEdit, setSwitchEdit] = useState(false);
    const isFriend = friends.filter(user => user._id === currentProfile._id);
    const navigate = useNavigate();
    const editHandler = () => {
        setSwitchEdit(true);
    }

    const addFriendHandler = () => {
        dispatch(addFriend(currentUser.result._id, id,navigate));
        
    }
    const removeFriendHandler = () => {
        dispatch(removeFriend(currentUser.result._id, id));
        window.location.reload();
    }

    return (
        <div className='home-container-1'>
            <LeftsideBar />
            <div className='home-container-2'>
                <section>
                    <div className='user-details-container'>
                        <div className='user-details'>
                            <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">
                                {currentProfile?.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className='user-name'>
                                <h1>{currentProfile?.name}</h1>
                                <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                            </div>
                        </div>
                        {
                            currentUser?.result._id === id && (
                                <button type='button' onClick={editHandler} className='edit-profile-btn'>
                                    <FontAwesomeIcon icon={faPen} />Edit Profile
                                </button>
                            )
                        }
                        {
                            currentUser?.result._id !== id && isFriend.length === 0 && (
                                <button type='button' onClick={addFriendHandler} className='edit-profile-btn'>
                                    <FontAwesomeIcon icon={faPlus} />Add Friend
                                </button>
                            )
                        }
                        {
                            currentUser?.result._id !== id && isFriend.length !== 0 && (
                                <button type='button' onClick={removeFriendHandler} className='edit-profile-btn'>
                                    <FontAwesomeIcon icon={faMinus} /> Remove Friend
                                </button>
                            )
                        }

                    </div>
                    <>
                        {switchEdit ? (
                            <EditProfileForm currentUser={currentProfile} setSwitch={setSwitchEdit} />
                        ) : (<UserBio currentProfile={currentProfile} />)}
                    </>
                </section>
            </div>
        </div>
    )
}

export default User;