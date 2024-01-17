import React from 'react'
import LeftsideBar from '../../components/leftsideBar/LeftsideBar';
import RightsideBar from '../../components/rightsideBar/RightsideBar';
import MainBar from '../../components/mainBar/MainBar';


const Home = () => {
    
    return (
        <div className='home-container-1'>
            <LeftsideBar />
            <div className='home-container-2'>
                <MainBar />
                <RightsideBar />
            </div>
        </div>
    )
}

export default Home;