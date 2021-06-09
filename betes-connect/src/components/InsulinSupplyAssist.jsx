import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';

function InsulinSupplyAssist(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            <CreatePost />
            <p>I'm assistance for insulin or other medical supplies</p>
        </div>
    );
}

export default InsulinSupplyAssist;