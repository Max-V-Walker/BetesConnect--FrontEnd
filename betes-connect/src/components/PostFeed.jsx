import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faBookmark } from "@fortawesome/free-regular-svg-icons";

const heart = <FontAwesomeIcon icon={faHeart} />;
const commentButton = <FontAwesomeIcon icon={faComment} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function PostFeed() {
  const {user, posts, likePost, bookmarkPost, comment} = useContext(Context)
  const [showComments, setShowComments] = useState()

  // useEffect(() => {
    // if(posts.author.username === posts.comments.commentor){
    //   setShowComments(true)
    // } else{
    //   setShowComments(false)
    // }
  // }, []);
  
  const commentFeed = posts.map(post => {
    return post.comments.map(comment => {
      return(
        <div key={post._id}>
            <Link to={`/profile/${comment.commentor}`} key={comment.commentor}><img src={comment.commentor} alt={comment.commentor} className='userPic' style={{height: '40px', width: '40px'}}/></Link>
            <h4>@{comment.commentor}</h4>
            <p>{comment.body}</p>
            <i onClick={() => likePost(post, user.username)} className="far fa-heart btn">{heart}<span>{comment.likes.length}</span></i>
          </div>
      )
    })
  // }
})

  let sortedPosts = [...posts].reverse()
  // creating <div> tags for each post to be rendered.
  const postFeed = sortedPosts.map(post => {
    return(
      <div key={post._id} className='userPostsHome userPostsProfile'>
        <Link to={`/profile/${post.author.username}`} key={user.username}><img src={post.author.profilePhoto} alt={user.username} className='userPic' style={{height: '50px', width: '50px'}}/></Link>
        <h4>{post.headline}</h4>
        <div>
            <p>@{post.author.username}</p>
            <p>{post.content}</p>
            <div>
              <form onSubmit={comment}>
                <input type='text' name='body' />
                <input type='hidden' name='postId' value={post._id} />
                <input type='hidden' name='commentor' value={user.username} />
                <button type='submit'>Comment</button>
              </form>
          </div>
        </div>
        <div className='btnBar'>
          <i onClick={{commentFeed}} className="far fa-comments btn">{commentButton}</i>

          <i onClick={() => likePost(post, user.username)} className="far fa-heart btn">{heart}<span>{post.likes.length}</span></i>

          <i onClick={() => bookmarkPost(post, user.username)} className="far fa-bookmark btn"> {bookmark} <span>{post.bookmarks.length}</span></i>
        </div>
          {/* {commentFeed}  */}
      </div>
    )
  })

  // creating <div> tags for each comment to be rendered.

  // const commentFeed = posts.map(post => {
  //     return post.comments.map(comment => {
  //       return(
  //           <div key={post._id} className='userPosts'>
  //             <Link to={`/profile/${comment.commentor}`} key={comment.commentor}><img src={comment.commentor} alt={comment.commentor} className='userPic' style={{height: '40px', width: '40px'}}/></Link>
  //             <h4>@{comment.commentor}</h4>
  //             <p>{comment.body}</p>
  //             <i onClick={() => likePost(post, user.username)} className="far fa-heart btn">{heart}<span>{comment.likes.length}</span></i>
  //           </div>
  //       )
  //     })
  //   // }
  // })

  return(
      <div>
          {postFeed}
          {commentFeed} 
          {/* {showComments ? {commentFeed} : null } */}
      </div>
  )
}
export default PostFeed;