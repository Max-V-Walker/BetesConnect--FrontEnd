import axios from 'axios'
import React, { useContext } from 'react';
import { Context } from './Context'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImages} from '@fortawesome/free-regular-svg-icons'
const photo = <FontAwesomeIcon icon={faImages} />

const CreatePost = () => {
  const {baseURL, getPosts, user} = useContext(Context)

  async function addPost (newPost) {
    const url = `${baseURL}/posts`
    await axios.post(url, newPost)
    getPosts()
  }

  function post(e) {
    e.preventDefault()
    const newPost = {
      headline: e.target.headline.value,
      author: user._id,
      content: e.target.post.value
    }
    addPost(newPost)
    e.target.reset()
  }

  return (
  <div>
    <div className='createPost'>
      <form onSubmit={post}>
        <textarea type='text' name='headline' placeholder={'headline'}/>
        <textarea type='text' name='post' placeholder={'post'}/>
        <div className='border-top newPosts'>
          <button type='button' className='buttons'><i>{photo}  Photo/video</i></button>
          <button type='submit' className="buttons">Submit</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default CreatePost;