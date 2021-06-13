import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import PostFeed from './PostFeed';

function Homepage() {
    return (
        <div className='homepageDiv'>
            <Header />
            <Sidebar />
            <PostFeed />
        </div>
    );
}

export default Homepage;