import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./Context";
import Header from "./Header";
import Sidebar from "./Sidebar";
import UserPosts from "./UserPosts";
import UserInfo from "./UserInfo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";
const heart = <FontAwesomeIcon icon={faHeart} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function ProfilePage({ match }) {
  const { user, posts, baseURL, likePost, bookmarkPost} = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState()
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    if(match.params.username === user.username) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    };
  }, []);


  async function getUser() {
    const url = `${baseURL}/users/${match.params.username}`;
    await axios
      .get(url)
      .then((res) => {
        console.log(res);
        setNewUser(res.data);
      })
      .catch((error) => {
        console.log("axios didnt work");
        console.log(error);
      });
  }
  useEffect(() => getUser(), []);

  const sortedPosts = [...posts]
    .reverse()
    .filter((post) => post.author.username === newUser.username);

  const profileFeed2 = sortedPosts.map((post) => {
    return (
      <div>
        <div key={post._id} className='userPosts'>
          <img
            src={post.author.profilePhoto}
            alt={newUser.username}
            style={{ height: "50px", width: "50px" }}
          />
          <h5>{post.headline}</h5>
          <h5>@{post.author.username}</h5>
          <p>{post.content}</p>
        </div>

        <div className='btnBar'>
          <i className="btn" onClick={() => likePost(post, newUser.username)}>
            {heart}{" "}
            <span className="badge badge-light">{post.likes.length}</span>
          </i>

          <i
            className="btn"
            onClick={() => bookmarkPost(post, newUser.username)}
          >
            {bookmark}{" "}
            <span className="badge badge-light">{post.bookmarks.length}</span>
          </i>
        </div>
      </div>
    );
  });

  const userInfo = (
    <div className='userBlock'>
      <div>
        <img alt={newUser.username} src={newUser.profilePhoto} className='profilePic'/>
      </div>
      <div className='userInfo'>
        <h3>@{newUser.username}</h3>
        <p>{newUser.name}</p>
        <p>{newUser.dob}</p>
        <p>{newUser.location}</p>
        <p>{newUser.connection}</p>
        <p>
          <strong>About me:</strong> {newUser.aboutMe}
        </p>
      </div>
      <div>
        <button type="button">Message</button>
      </div>
    </div>
  );

  return (
    <div className='profilePageDiv'>
      <Header />
      <Sidebar />
      {isLoggedIn ? <UserInfo />  : userInfo}
      {/* <div>
        <button type="button">Message</button>
      </div> */}
      {isLoggedIn ? <UserPosts /> : profileFeed2}
    </div>
  );
}

export default ProfilePage;
