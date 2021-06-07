import React, { useContext, useEffect } from 'react';
import { Context } from './Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faBookmark } from "@fortawesome/free-regular-svg-icons";

const heart = <FontAwesomeIcon icon={faHeart} />;
const comment = <FontAwesomeIcon icon={faComment} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function PostFeed() {
    const {user, posts, getPosts, likePost} = useContext(Context)

  useEffect(()=> {getPosts()}, [])
  let sortedPosts = [...posts]

  // creating <div> tags for each post to be rendered.
  const postFeed = sortedPosts.map(post => {
    return (
      <div key={post._id}>
        <img src={user.profilePhoto} alt={user.username} style={{height: '50px', width: '50px'}}/>
        <h4>{post.headline}</h4>
        <div>
            <p>@{post.author}</p>
            <p>{post.content}</p>
        </div>
        <nav className='navbar border-top'>
          <i className="far fa-comments btn">{comment}</i>
          <i onClick={() => likePost(post, user.username)} className="far fa-heart btn">{heart}<span className='badge badge-light'>{post.likes.length}</span></i>
          <i className="far fa-bookmark btn"> {bookmark}</i>
        </nav>
      </div>
    )
  })

  return(
      <div>
          {postFeed}
      </div>
  )
}

export default PostFeed;