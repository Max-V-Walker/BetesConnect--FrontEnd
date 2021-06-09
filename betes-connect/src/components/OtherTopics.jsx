import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';

function OtherTopics(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            <CreatePost />
            <h1>I'm other topics</h1>
        </div>
    );
}

export default OtherTopics;