import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo.png';
import search from '../../assets/search-solid.svg';
// import chat from '../../assets/chat.svg';
import bars from '../../assets/bars-solid.svg';
import Avatar from '../avatar/Avatar';
import './Navbar.css'
import { currentUser } from '../../actions/currentUser';
import ChatBot from '../chatbot/ChatBot';
import LeftsideBar from '../leftsideBar/LeftsideBar';

const Navbar = ({ handleSlideIn}) => {
    const navigate = useNavigate();
    var user = useSelector((state) => (state.currentUserReducer));
    var verified = user?.result?.isVerified;
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        window.location.reload();
        dispatch(currentUser(null));
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logoutHandler();
            }
        }
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [dispatch]);





    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <button className="slide-in-icon" onClick={() => handleSlideIn()}>
                    <img src={bars} alt="bars" width="15" />
                </button>
                <div className='navbar-1'>

                    <Link to='/' className='nav-item nav-logo'>
                        <img src={logo} alt='logo' />
                    </Link>
                    <Link to='/' className='nav-item nav-btn res-nav'>About</Link>
                    <Link to='/' className='nav-item nav-btn res-nav'>Products</Link>
                    <Link to='/' className='nav-item nav-btn res-nav'>For Teams</Link>
                    <Link to='/subs' className='nav-item nav-btn res-nav'>Subscription</Link>
                    <form>
                        <input type='text' placeholder='Search...' />
                        <img src={search} alt='search' width='18' className='search-icon' />
                    </form>
                </div>
                <div className='navbar-2'>

                    {user === null ?
                        <Link to='/auth' className='nav-item nav-links'>Log in</Link>:
                        <>
                            <Link to={`/users/${user?.result?._id}`} style={{ textDecoration: 'none' }}><Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'>{user.result.name.charAt(0).toUpperCase()}</Avatar></Link>
                            <button className='nav-item nav-links' onClick={logoutHandler}>Log Out</button>
                        </>
                    }
                    {user &&
                <div className='chat-box'>
                    {verified ? <ChatBot /> :
                        <Link to={`/users/${user?.result?._id}/verify`} className='def-bot'><FontAwesomeIcon className='icon' icon={faRobot} /></Link>}

                </div>
            }

                </div>
            </div>
            
        </nav>
    )
}


export default Navbar;