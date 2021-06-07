import axios from 'axios'
import React, { useContext } from 'react';
import Modal from 'react-modal'
import { Context } from './Context';

Modal.setAppElement('#root')

function EditUser({ userInfoModalIsOpen, setUserInfoModalIsOpen }) {

  const {baseURL, setUser, user} = useContext(Context)

  // toggle function for modal open and close boolean
  function toggleUserInfoModal() {
    setUserInfoModalIsOpen(!userInfoModalIsOpen);
  }

  // axios update request
  async function updateUser (newUserInfo) {
    const url = `${baseURL}/users/${user._id}`
    const updatedUser = await axios.put(url, newUserInfo)
    setUser(updatedUser.data)
  }

  function editUser (e) {
    e.preventDefault()
    const newUserInfo = {
      username: e.target.username.value,
      name: e.target.name.value,
      dob: e.target.dob.value,
      location: e.target.location.value,
      connection: e.target.connection.value,
      aboutMe: e.target.aboutMe.value,
      profilePhoto: e.target.profilePhoto.value,
    }
    updateUser(newUserInfo)
    toggleUserInfoModal()
  }

  return (
    <Modal isOpen={userInfoModalIsOpen} onRequestClose={toggleUserInfoModal}>
      <h2>Edit Profile</h2>
      <form onSubmit={editUser}>

      <div>
        Username: <input type='text' name='username' defaultValue={user.username} placeholder='Handle'/>
      </div>

      <div>
        Name: <input type='text' name='name' defaultValue={user.name} placeholder='Full name'/>
      </div>

      <div>
        Birthday: <input type='text' name='dob' defaultValue={user.dob} placeholder='Date of Birth'/>
      </div>
    
      <div>
       Location: <input type='text' name='location' defaultValue={user.location} placeholder='Location'/>
      </div>

      <div>
        Connection: <input type='text' name='connection' defaultValue={user.connection} placeholder='Connection to DB'/>   
      </div>

      <div>
        About Me: <input type='text' name='aboutMe' defaultValue={user.aboutMe} placeholder='About Me'/>   
      </div>

      <div>
        Profile Photo: <input type='text' name='profilePhoto' defaultValue={user.profilePhoto} placeholder='Photo'/>   
      </div>


      <div>
        <button type='submit'>Update Profile Info</button>
        <button onClick={toggleUserInfoModal}>Close</button>
      </div>

      </form>
    </Modal>
  );
}

export default EditUser;