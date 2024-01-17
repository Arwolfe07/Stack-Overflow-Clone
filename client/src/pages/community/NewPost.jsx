import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makePost } from '../../actions/community';

const NewPost = () => {
  const [postBody, setPostBody] = useState('');
  const [postImage, setPostImage] = useState(null);
  const user = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cancelHandler = (e) => {
    e.preventDefault();
    navigate('/community');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('postBody', postBody);
    formData.append('userPosted', user.result.name);
    formData.append('userId', user?.result?._id);
    formData.append('image', postImage);

    dispatch(makePost(formData, navigate));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPostImage(file);
  };

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>What's on your mind?</h1>
        <form encType="multipart/form-data" onSubmit={submitHandler}>
          <div className="ask-form-container">
            <label htmlFor="post-body">
              <h4>Write something?</h4>
              <p>Write about your programming experience or a story or about anything you want...</p>
              <input
                type="text"
                id="post-body"
                placeholder="e.g. My first code, first internship, first company..."
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
              />
            </label>
            <label htmlFor="image">
              <h4>Upload Image/Video (less than 10 MB)</h4>
              <p>Add an image or video associated with the memory</p>
            </label>
            <input type="file" id="image" name="image" onChange={handleImageChange} />
          </div>
          <div className="post-btn-new">
            <input type="submit" value="Make a post" className="review-btn" />
            <input type="button" value="Cancel" className="review-btn cancel" onClick={cancelHandler} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
