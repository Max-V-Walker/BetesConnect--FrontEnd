import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faBookmark } from "@fortawesome/free-regular-svg-icons";

const heart = <FontAwesomeIcon icon={faHeart} />;
const comment = <FontAwesomeIcon icon={faComment} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function PostFeed() {
    const {user, posts, getPosts, likePost, bookmarkPost} = useContext(Context)

  useEffect(()=> {getPosts()}, [])
  let sortedPosts = [...posts]

  // creating <div> tags for each post to be rendered.
  const postFeed = sortedPosts.map(post => {
    console.log(post);
    return (
      <div key={post._id}>
        <Link to={`/profile/${user.username}`}><img src={post.author.profilePhoto} alt={user.username} style={{height: '50px', width: '50px'}}/></Link>
        <h4>{post.headline}</h4>
        <div>
            <p>@{post.author.username}</p>
            <p>{post.content}</p>
        </div>
        <nav className='navbar border-top'>
          <i className="far fa-comments btn">{comment}</i>

          <i onClick={() => likePost(post, user.username)} className="far fa-heart btn">{heart}<span>{post.likes.length}</span></i>

          <i onClick={() => bookmarkPost(post, user.username)} className="far fa-bookmark btn"> {bookmark} <span>{post.bookmarks.length}</span></i>
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