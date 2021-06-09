import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';

function OtherMedConditions(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            <CreatePost />
            <p>I'm other medical conditions</p>
        </div>
    );
}

export default OtherMedConditions;