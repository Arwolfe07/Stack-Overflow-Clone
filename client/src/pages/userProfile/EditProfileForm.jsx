import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updatedProfile } from '../../actions/users';

const EditProfileForm = ({ currentUser, setSwitch }) => {
    const [name, setName] = useState(currentUser?.name);
    const [about, setAbout] = useState(currentUser?.about);
    const [tags, setTags] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (tags.length === 0) {
            dispatch(updatedProfile(currentUser?._id, { name, about, tags: currentUser?.tags }))
        } else {
            dispatch(updatedProfile(currentUser?._id, { name, about, tags }))
        }
        setSwitch(false);
    }

    return (
        <div>
            <h1 className='edit-profile-title'>Edit Your Profile</h1>
            <h2 className='edit-profile-title-2'>Public Information</h2>

            <form className='edit-profile-form' onSubmit={submitHandler}>
                <label htmlFor='name'>
                    <h3>Display Name</h3>
                    <input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label htmlFor='about'>
                    <h3>About me</h3>
                    <textarea id='about' cols='30' rows='10' value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                </label>
                <label htmlFor='tags'>
                    <h3>Watched tags</h3>
                    <p>Add tags separated by 1 space</p>
                    <input type='text' id='tags' onChange={(e) => setTags(e.target.value.split(' '))} />
                </label>
                <br />
                <input type='submit' value='Save Profile' className='user-submit-btn' />
                <input type='button' value='Cancel' className='user-cancel-btn' onClick={() => setSwitch(false)} />

            </form>
        </div>
    )
}

export default EditProfileForm