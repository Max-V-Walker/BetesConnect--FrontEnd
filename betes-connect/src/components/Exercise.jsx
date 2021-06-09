import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';

function Exercise(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            <CreatePost />
            <p>I'm exercise</p>
        </div>
    );
}

export default Exercise;