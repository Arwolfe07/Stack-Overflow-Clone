import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import globe from '../../assets/Globe.svg';
import social from '../../assets/social.svg';
import './LeftSidebar.css'
import { useSelector, useDispatch } from 'react-redux';
import { slideIn, slideOut } from "../../actions/slideIn";

const LeftsideBar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUserReducer);
    const slideInState = useSelector((state) => state.slideInReducer.slideIn);
    const handleSlideIn = () => {
        if (window.innerWidth <= 760) {
            if (slideInState) {
                dispatch(slideOut());
            } else {
                dispatch(slideIn());
            }
        }

    };

    const slideInStyle = {
        transform: "translateX(0%)",
    };

    const slideOutStyle = {
        transform: "translateX(-100%)",
    };

    return (
        <div className='left-sidebar' style={slideInState ? slideOutStyle : slideInStyle}>
            <div >

                <nav className='side-nav'>
                    <button onClick={() => handleSlideIn()} className="nav-btn">
                        <NavLink to='/' className='side-nav-links' activeClassName='active'>
                            <p>Home</p>
                        </NavLink>
                    </button>
                    <div className='side-nav-div'>
                        <div><p>PUBLIC</p></div>
                        <button onClick={() => handleSlideIn()} className="nav-btn">
                            <NavLink to='/questions' className='side-nav-links' activeClassName='active'>
                                <img src={globe} alt='globe' />
                                <p style={{ paddingLeft: '10px' }}>Questions</p>
                            </NavLink>
                        </button>
                        <button onClick={() => handleSlideIn()} className="nav-btn">
                            <NavLink to='/community' className='side-nav-links' activeClassName='active'>
                                <img src={social} alt='globe' />
                                <p style={{ paddingLeft: '10px' }}>Community</p>
                            </NavLink>
                        </button>
                        <button onClick={() => handleSlideIn()} className="nav-btn">
                            <NavLink to='/tags' className='side-nav-links' activeClassName='active'>
                                <p>Tags</p>
                            </NavLink>
                        </button>
                        <button onClick={() => handleSlideIn()} className="nav-btn">
                            <NavLink to='/users' className='side-nav-links' activeClassName='active'>
                                <p>Users</p>
                            </NavLink>
                        </button>
                        {user !== null && <button onClick={() => handleSlideIn()} className="nav-btn">
                            <NavLink to='/:id/friends' className='side-nav-links' activeClassName='active'>
                                <p>Friends</p>
                            </NavLink>
                        </button>}

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default LeftsideBar;