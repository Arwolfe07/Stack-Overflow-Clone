import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import heart from '../../assets/heart.png';
import filled from '../../assets/filledHeart.png';
import share from '../../assets/share.png';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost } from '../../actions/community';
import { useLocation } from 'react-router-dom';

const Post = ({ post, userId }) => {

  const [userPost, setUserPost] = useState(post.likes.filter(id => id === userId));
  const url = 'https://stack-backend-i4ps.onrender.com';
  const locate = useLocation();
  const dispatch = useDispatch();

  const shareHandler = () => {
    copy(url + locate.pathname);
    alert('Copied URL: ' + url + locate.pathname);
  }

  const likeButtonHandler = () => {
    // console.log(post);
    if (userPost.length === 0) {
      setUserPost(prev => [...prev, userId]);
      dispatch(likePost(post._id, userId, 'like'))
    }
    if (userPost.length !== 0) {
      setUserPost(prev => prev.filter(id => id != userId));
      dispatch(likePost(post._id, userId, 'unlike'));
    }
  }
  return (
    <div className='outer-card'>
      <div className="inner-card-1">

        <img src={post.postImg.url} className='post-img' alt='post-img' />
        <p className='post-text'>{post.postBody}</p>
        <div className='post-det'>
          <p className='post-likes'>{post.likes.length} likes</p>
          <p className='post-by'>by {post.userPosted} on {moment(post.createdAt).format('DD-MM-YYYY')}</p>
        </div>

      </div>
      <div className='inner-card-2'>
        <button className='like-btn single-btn' onClick={likeButtonHandler}><img src={userPost.length === 0 ? heart : filled} width={18} /> Like</button>
        <button className='share-btn single-btn' onClick={shareHandler}><img src={share} width={18} /> Share</button>
      </div>

    </div>
  )
}

export default Post;