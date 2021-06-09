import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';

function FoodDiet(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            <CreatePost />
            <p>I'm food & diet</p>
        </div>
    );
}

export default FoodDiet;