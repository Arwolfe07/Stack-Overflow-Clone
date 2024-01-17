import React from 'react';
import { useSelector } from 'react-redux';
import LeftsideBar from '../../components/leftsideBar/LeftsideBar';
import RightsideBar from '../../components/rightsideBar/RightsideBar';
import CommunityContent from './CommunityContent';
import './CommunityPage.css';


const CommunityPage = () => {
  const posts = useSelector(state => state.postReducer);
  

  return (
    <div className='home-container-1'>
      <LeftsideBar />
      <div className='home-container-2'>
      
          <>
          
            <CommunityContent posts={posts.data}/>
          </>
        
        <RightsideBar />
      </div>
    </div>
  )
}

export default CommunityPage;