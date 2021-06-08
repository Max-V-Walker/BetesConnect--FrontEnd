import axios from 'axios';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Context } from './components/Context'

import Landing from './components/Landing';
import Homepage from './components/Homepage';
import Bookmarks from './components/Bookmarks';
import ProfilePage from './components/ProfilePage';
import Messages from './components/Messages';
import Type1 from './components/Type1';
import Type2 from './components/Type2';
import Pregnancy from './components/Pregnancy';
import FriendsFamily from './components/FriendsFamily';
import FoodDiet from './components/FoodDiet';
import TestingSugar from './components/TestingSugar';
import InsulinPumps from './components/InsulinPumps';
import CGM from './components/CGM';
import Exercise from './components/Exercise';
import Weightlossgain from './components/Weightlossgain';
import DepressionPositivity from './components/DepressionPositivity';
import Complications from './components/Complications';
import SexIntimacy from './components/SexIntimacy';
import InsulinSupplyAssist from './components/InsulinSupplyAssist';
import OtherMedConditions from './components/OtherMedConditions';
import Humor from './components/Humor';
import NewsLinks from './components/NewsLinks';
import BooksPodcasts from './components/BooksPodcasts';
import MeetUps from './components/MeetUps';

function App() {
const baseURL = "http://localhost:4000"
const [user, setUser] = useState({})
const [posts, setPosts] = useState([])
const [loggedIn, setLoggedIn] = useState(false)

//Getting all the posts
async function getPosts () {
  const url = `${baseURL}/posts/`
  await axios.get(url)
  .then(res => {
    setPosts(res.data)
  })
  .catch(error => {
    console.log("axios didnt work")
    console.log(error)
  })
}

// axios update request
async function updatePost (postId, newContent, newHeadline) {
  const url = `${baseURL}/posts/${postId}`
  const updatedPosts = await axios.put(url, {content: newContent, headline: newHeadline, author: user._id})
  // setPosts(updatedPosts.data)
  getPosts()
}

//Like function
function likePost(post, username){
  const tempLikes = [...post.likes]
  if (tempLikes.includes(username)) {
    const index = tempLikes.indexOf(username)
    tempLikes.splice(index, 1)
    updatePost(post._id, {likes: tempLikes})
  } else {
    tempLikes.push(username)
    updatePost(post._id, {likes: tempLikes})
  }
}

//Bookmark function
function bookmarkPost(post, username){
  const tempBookmarks = [...post.bookmarks]
  if (tempBookmarks.includes(username)) {
    const index = tempBookmarks.indexOf(username)
    tempBookmarks.splice(index, 1)
    updatePost(post._id, {bookmarks: tempBookmarks})
  } else {
    tempBookmarks.push(username)
    updatePost(post._id, {bookmarks: tempBookmarks})
  }
}

  return (
    <>
    <Context.Provider value={{baseURL, user, setUser, posts, setPosts, getPosts, updatePost, loggedIn, setLoggedIn, likePost, bookmarkPost}}>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/home' component={Homepage}/>
      <Route exact path='/bookmarks' component={Bookmarks}/>
      <Route exact path='/messages' component={Messages}/>
      <Route exact path={`/profile/${user.username}`} component={ProfilePage}/>
      <Route exact path='/general-diabetes/type1' component={Type1}/>
      <Route exact path='/general-diabetes/type2' component={Type2}/>
      <Route exact path='/general-diabetes/pregnancy' component={Pregnancy}/>
      <Route exact path='/general-diabetes/friends&family' component={FriendsFamily}/>
      <Route exact path='/day-to-day/food&diet' component={FoodDiet}/>
      <Route exact path='/day-to-day/testing-blood-sugars' component={TestingSugar}/>
      <Route exact path='/day-to-day/insulin-pumps' component={InsulinPumps}/>
      <Route exact path='/day-to-day/cgm' component={CGM}/>
      <Route exact path='/day-to-day/exercise' component={Exercise}/>
      <Route exact path='/day-to-day/weight-loss/gain' component={Weightlossgain}/>
      <Route exact path='/the-long-run/depression-&-staying-positive' component={DepressionPositivity}/>
      <Route exact path='/the-long-run/complications' component={Complications}/>
      <Route exact path='/the-long-run/sex-&-intimacy' component={SexIntimacy}/>
      <Route exact path='/the-long-run/insulin-supplies-assistance' component={InsulinSupplyAssist}/>
      <Route exact path='/the-long-run/other-medical-conditions' component={OtherMedConditions}/>
      <Route exact path='/other-topics/humor' component={Humor}/>
      <Route exact path='/other-topics/news&links' component={NewsLinks}/>
      <Route exact path='/other-topics/books&podcasts' component={BooksPodcasts}/>
      <Route exact path='/other-topics/meet-ups' component={MeetUps}/>
    </Context.Provider>
    </>
  );
}

export default App;
