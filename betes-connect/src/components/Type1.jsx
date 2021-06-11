import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import PostFeed from './PostFeed';
import CreatePost from './CreatePost';

function Type1() {
    return (
        <div>
            <Header />
            <Sidebar />
            <CreatePost />
            <p>I'm type1</p>
            <PostFeed />
        </div>
    );
}

export default Type1;