import React, { useContext } from "react";
import Header from './Header';
import Sidebar from './Sidebar';
import { Context } from './Context';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faBookmark } from "@fortawesome/free-regular-svg-icons";

const heart = <FontAwesomeIcon icon={faHeart} />;
const commentButton = <FontAwesomeIcon icon={faComment} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function Bookmarks() {
const {comment, posts, likePost, user, bookmarkPost} = useContext(Context)

let sortedPosts = [...posts].reverse()
  // creating <div> tags for each post to be rendered.
const bookmarkFeed = sortedPosts.map(post => {
    if(post.bookmarks.length>0 && post.bookmarks.includes(user.username)){
    // if(post.bookmarks.length>0){
        return(
            <div key={post._id} className=' userPosts bookmarkedPosts'>
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
                <i className="far fa-comments btn">{commentButton}</i>
                <i onClick={() => likePost(post, user.username)} className="far fa-heart btn">{heart}<span>{post.likes.length}</span></i>
                <i onClick={() => bookmarkPost(post, user.username)} className="far fa-bookmark btn"> {bookmark} <span>{post.bookmarks.length}</span></i>
            </div>
        </div>
        )
    }
})

    return (
        <div>
            <Header />
            <Sidebar />
            {bookmarkFeed}
        </div>
    );
}

export default Bookmarks;