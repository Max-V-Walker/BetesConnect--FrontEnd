import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

function ProfilePage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <UserInfo />
            <CreatePost />
            <UserPosts />
        </div>
    );
}

export default ProfilePage;