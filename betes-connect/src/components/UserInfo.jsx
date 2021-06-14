import React, { useContext } from "react";
import { Context } from "./Context";
import EditUser from './EditUser'

function UserInfo() {
    const {user, userInfoModalIsOpen, openUserInfoModal, setUserInfoModalIsOpen} = useContext(Context)
    
    return (
        <>
            <div className='userBlock'>
                <div>
                    <img onClick={openUserInfoModal} alt={user.username} src={user.profilePhoto} className='profilePic'/>
                </div>
                <div className='userInfo'>
                    <h3>@{user.username}</h3>
                    <p>{user.name}</p>
                    <p>{user.dob}</p>
                    <p>{user.location}</p>
                    <p>{user.connection}</p>
                    <p><strong>About me:</strong> {user.aboutMe}</p>
                </div>
            </div>
            <div>
                { userInfoModalIsOpen &&
                <EditUser userInfoModalIsOpen={userInfoModalIsOpen} setUserInfoModalIsOpen={setUserInfoModalIsOpen}/>
                }
            </div>
        </>
    );
}

export default UserInfo;