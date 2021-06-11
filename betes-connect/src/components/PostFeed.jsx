import React, { useContext } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import { Context } from './Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faBookmark } from "@fortawesome/free-regular-svg-icons";

import ProfilePage from './ProfilePage';

const heart = <FontAwesomeIcon icon={faHeart} />;
const commentButton = <FontAwesomeIcon icon={faComment} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function PostFeed() {
  const {user, posts, likePost, bookmarkPost, getPosts, baseURL} = useContext(Context)
  
  // function comment(e) {
  //   e.preventDefault()
  //   async function addComment (newComment) {
  //     const url = `${baseURL}/posts`
  //     await axios.post(url, newComment)
  //     getPosts()
  //   }
  //   const newComment = {
  //     author: user._id,
  //     content: e.target.post.value
  //   }
  //   addComment(newComment)
  //   e.target.reset()
  // }


  let sortedPosts = [...posts].reverse()

  // creating <div> tags for each post to be rendered.
  const postFeed = sortedPosts.map(post => {
    return(
      <div key={post._id}>
        <Link to={`/profile/${post.author.username}`} key={user.username}><img src={post.author.profilePhoto} alt={user.username} style={{height: '50px', width: '50px'}}/></Link>
        <h4>{post.headline}</h4>
        <div>
            <p>@{post.author.username}</p>
            <p>{post.content}</p>
        </div>
        <nav className='navbar border-top'>
          {/* <i onClick={() => comment(post, user.username)}className="far fa-comments btn">{commentButton}</i> */}

          <i onClick={() => likePost(post, user.username)} className="far fa-heart btn">{heart}<span>{post.likes.length}</span></i>

          <i onClick={() => bookmarkPost(post, user.username)} className="far fa-bookmark btn"> {bookmark} <span>{post.bookmarks.length}</span></i>
        </nav>
      </div>
    )
    }
  )

  return(
      <div>
          {postFeed}
      </div>
  )
}
export default PostFeed;