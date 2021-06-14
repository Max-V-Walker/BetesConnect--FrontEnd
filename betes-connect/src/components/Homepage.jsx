import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import PostFeed from './PostFeed';

function Homepage() {
    return (
        <div>
            <Header />
            <div className='homepageDiv'>
                <Sidebar />
                <PostFeed />
            </div>
        </div>
    );
}

export default Homepage;