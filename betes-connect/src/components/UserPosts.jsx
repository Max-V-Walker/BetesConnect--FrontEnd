import axios from 'axios'
import React, { useState, useContext } from "react";
import { Context } from './Context';
import EditPost from './EditPost'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEdit, faBookmark} from "@fortawesome/free-regular-svg-icons";
const heart = <FontAwesomeIcon icon={faHeart} />;
const edit = <FontAwesomeIcon icon={faEdit} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function UserPosts({modalStyling}) {
  const {baseURL, posts, setPosts, user, likePost } = useContext(Context)
  
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
  function openEditModal(id, content) {
    setModalIsOpen(true)
    setPostToBeEdited({id: id, content: content})
  }

  const sortedPosts = [...posts].reverse().filter(post => post.author === user.username)
  
  const profileFeed = sortedPosts.map(post => {
    return (
        <>
        <div key={post._id}>
          <h5>{post.headline}</h5>
          <h5>@{post.author}</h5>
          <p>{post.content}</p>
        </div>
        <nav className='navbar border-top'>
          <i className="btn" onClick={() => openEditModal(post._id, post.content)}>{edit}</i>
          <i className="btn" onClick={() => likePost(post, user.username)}>
          <i className="btn">{bookmark}</i>
            {heart} <span className='badge badge-light'>{post.likes.length}</span>
          </i>
          <button className='trash' onClick={deletePosting} name={post._id}>🗑️</button>
        </nav>
        </>
    )
  })
  return(
    <div>
      {profileFeed}
      { modalIsOpen && 
        <EditPost modalStyling={modalStyling} post={postToBeEdited} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
      }
    </div>
  )
}
export default UserPosts;