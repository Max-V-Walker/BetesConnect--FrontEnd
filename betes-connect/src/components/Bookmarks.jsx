import React, { useContext } from "react";
import Header from './Header';
import { Context } from './Context';

function Bookmarks() {
const {baseURL, posts, setPosts, getPosts, user, bookmarkPost} = useContext(Context)



    return (
        <div>
            <Header />
            <p>I'm bookmarks</p>
        </div>
    );
}

export default Bookmarks;