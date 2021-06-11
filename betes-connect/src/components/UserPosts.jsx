import axios from 'axios'
import React, { useState, useContext } from "react";
import { Context } from './Context';
import EditPost from './EditPost'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEdit, faBookmark} from "@fortawesome/free-regular-svg-icons";
const heart = <FontAwesomeIcon icon={faHeart} />;
const edit = <FontAwesomeIcon icon={faEdit} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function UserPosts() {
  const {baseURL, posts, setPosts, user, likePost, bookmarkPost} = useContext(Context)
  
  async function deletePost (postId) {
    const url = `${baseURL}/posts/${postId}`
    const updatedPosts = await axios.delete(url)
    setPosts(updatedPosts.data)
  }

  function deletePosting (e) {
    e.preventDefault()
    const postId = e.target.name
    deletePost(postId)
  }

  // Setting up react-Modal hooks and functions:
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postToBeEdited, setPostToBeEdited] = useState({});
  function openEditModal(id, content, headline) {
    setModalIsOpen(true)
    setPostToBeEdited({id: id, content: content, headline: headline})
  }

  const sortedPosts = [...posts].reverse().filter(post => post.author.username === user.username)
  
  const profileFeed = sortedPosts.map(post => {
    return (
      <div>
        <div key={post._id}>
          <img src={post.author.profilePhoto} alt={user.username} style={{height: '50px', width: '50px'}}/>
          <h5>{post.headline}</h5>
          <h5>@{post.author.username}</h5>
          <p>{post.content}</p>
        </div>
          
          <nav>
          <i className="btn" onClick={() => openEditModal(post._id, post.content, post.headline)}>{edit}</i>
          
          <i className="btn" onClick={() => likePost(post, user.username)}>
          {heart} <span className='badge badge-light'>{post.likes.length}</span>
          </i>
          
          <i className="btn" onClick={() => bookmarkPost(post, user.username)}>{bookmark} <span className='badge badge-light'>{post.bookmarks.length}</span></i>
          
          <button className='trash' onClick={deletePosting} name={post._id}>🗑️ </button>
        </nav>
      </div>
    )
  })
  return(
    <div>
      {profileFeed}
      { modalIsOpen && 
        <EditPost post={postToBeEdited} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
      }
    </div>
  )
}
export default UserPosts;