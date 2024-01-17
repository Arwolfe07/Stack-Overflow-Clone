import React, { useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import RootLayout from './components/route/RootLayout';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import Questions from './pages/questions/Questions';
import AskQuestion from './pages/askquestion/AskQuestion';
import DisplayQuestion from './pages/questions/DisplayQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from './actions/question';
import { getAllUsers } from './actions/users';
import { getPosts } from './actions/community';
import { getFriends } from './actions/friend';
import Tags from './pages/tags/Tags';
import Users from './pages/users/Users';
import User from './pages/userProfile/User';
import VerifyEmail from './pages/auth/VerifyEmail';
import SubscriptionPage from './pages/subscriptions/SubscriptionPage';
import CommunityPage from './pages/community/CommunityPage';
import NewPost from './pages/community/NewPost';
import Friends from './pages/friends/Friends';


const router = createHashRouter([{
  path: '/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: '/auth',
      element: <Auth />
    },
    {
      path: '/questions',
      element: <Questions />
    },
    {
      path: '/askquestion',
      element: <AskQuestion />
    },
    {
      path: '/questions/:id',
      element: <DisplayQuestion />
    },
    {
      path: '/tags',
      element: <Tags />
    },
    {
      path: '/users',
      element: <Users />
    },
    {
      path: '/users/:id',
      element: <User />
    },
    {
      path: '/users/:id/verify',
      element: <VerifyEmail />
    },
    {
      path: '/subs',
      element: <SubscriptionPage />
    },
    {
      path: '/community',
      element: <CommunityPage />
    },
    {
      path: '/community/new',
      element: <NewPost />
    },
    {
      path: '/:id/friends',
      element: <Friends />
    }

  ]
}])

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUserReducer)
  useEffect(() => {
    dispatch(getQuestions());
    dispatch(getAllUsers());
    dispatch(getPosts());
    if (user) {
      dispatch(getFriends(user.result._id));
    }

  }, [dispatch])

  return (<RouterProvider router={router} />);
}

export default App;
