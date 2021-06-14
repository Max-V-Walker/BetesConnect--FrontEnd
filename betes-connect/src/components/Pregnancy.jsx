import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';

function Pregnancy(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            <CreatePost />
        </div>
    );
}

export default Pregnancy;