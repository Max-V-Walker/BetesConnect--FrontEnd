import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';

function TheLongRun(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            <CreatePost />
            <h1>I'm TLR</h1>
        </div>
    );
}

export default TheLongRun;