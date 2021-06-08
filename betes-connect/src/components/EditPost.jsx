import React, { useContext } from 'react';
import Modal from 'react-modal'
import { Context } from './Context';

Modal.setAppElement('#root')

function EditPost({ post, modalIsOpen, setModalIsOpen }) {
  const {updatePost} = useContext(Context)

  // toggle function for modal open and close boolean
  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function editPost (e) {
    e.preventDefault()
    const postId = e.target.name

    const newHeadline = e.target.newHeadline.value
    console.log(newHeadline)

    const newContent = e.target.newContent.value
    console.log(newContent)

    updatePost(postId, newContent, newHeadline)
    toggleModal()
  }

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={toggleModal}>
      <div>
        <h2>Edit Post</h2>
        <form onSubmit={editPost} name={post.id}>
        <div>

          <textarea type='text' name='newHeadline' placeholder="New headline" defaultValue={post.headline} />

          <textarea type='text' name='newContent' placeholder="New content" defaultValue={post.content} />

        </div>
        <div>
          <button className="modalButton" type='submit'>Save</button>
          <button className="modalButton" onClick={toggleModal}>Close</button>
        </div>

        </form>
      </div>
    </Modal>
  );
}

export default EditPost;