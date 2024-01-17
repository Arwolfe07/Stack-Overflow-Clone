import React from 'react';
import { useNavigate } from 'react-router-dom';
import Post from './Post';
import { useSelector } from 'react-redux';

const CommunityContent = ({ posts }) => {
    const navigate = useNavigate();
    const user = useSelector(state => state.currentUserReducer);


    const newpostClickHandler = () => {
        if (user == null) {
            alert("Login or Signup to make a post");
            navigate('/auth');
        }
        else {
            navigate('/community/new');
        }
    }

    return (
        <div className='community-bar'>
            <div className='community-header'>
                <h1>All Posts</h1>
                <button className='post-btn' onClick={newpostClickHandler}>New Post</button>
            </div>
            { posts === null? <h1>Loading...</h1> :
                <>
                    <p>{posts.length} posts</p>
                    {posts.map(post => (
                        <Post post={post} key={post._id} userId={user?.result?._id} />
                    )
                    )}
                </>
            }
        </div>
    )
}

export default CommunityContent;