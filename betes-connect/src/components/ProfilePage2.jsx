import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from "./Context";
import Header from './Header'
import Sidebar from './Sidebar'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark} from "@fortawesome/free-regular-svg-icons";
const heart = <FontAwesomeIcon icon={faHeart} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function ProfilePage2({match}) {
    const {posts, baseURL, likePost, bookmarkPost} = useContext(Context)
    const [newUser, setNewUser] = useState({})

    async function getUser () {
        const url = `${baseURL}/users/${match.params.username}`
        await axios.get(url)
        .then(res => {
            console.log(res);
        setNewUser(res.data)
        })
        .catch(error => {
          console.log("axios didnt work")
          console.log(error)
        })
      }

    useEffect(() => getUser(), [])

    const sortedPosts = [...posts].reverse().filter(post => post.author.username === newUser.username)
  
  const profileFeed2 = sortedPosts.map(post => {
    return (
      <div>
        <div key={post._id}>
          <img src={post.author.profilePhoto} alt={newUser.username} style={{height: '50px', width: '50px'}}/>
          <h5>{post.headline}</h5>
          <h5>@{post.author.username}</h5>
          <p>{post.content}</p>
        </div>
          
          <nav>
          <i className="btn" onClick={() => likePost(post, newUser.username)}>
          {heart} <span className='badge badge-light'>{post.likes.length}</span>
          </i>
          
          <i className="btn" onClick={() => bookmarkPost(post, newUser.username)}>{bookmark} <span className='badge badge-light'>{post.bookmarks.length}</span></i>
        </nav>
      </div>
    )
  })

    return (
        <div>
            <Header />
            <Sidebar />
           <div>
               <div>
                   <img alt={newUser.username} src={newUser.profilePhoto}/>
               </div>
               <h3>@{newUser.username}</h3>
               <p>{newUser.name}</p>
               <p>{newUser.dob}</p>
               <p>{newUser.location}</p>
               <p>{newUser.connection}</p>
               <p><strong>About me:</strong> {newUser.aboutMe}</p>
           </div>
           <div>
               <button type='button'>Message</button>
           </div>
           {profileFeed2}
   </div>
    );
}

export default ProfilePage2;