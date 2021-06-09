import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';

function Day2Day(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            <CreatePost />
            <h1>I'm day2day</h1>
        </div>
    );
}

export default Day2Day;