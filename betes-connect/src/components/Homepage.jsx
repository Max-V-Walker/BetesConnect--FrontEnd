import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import PostFeed from './PostFeed';

function Homepage(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            <PostFeed />
        </div>
    );
}

export default Homepage;