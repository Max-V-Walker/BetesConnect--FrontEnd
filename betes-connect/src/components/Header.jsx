import React, { useContext } from "react";
import { Context } from "./Context";
import { Link, Redirect } from 'react-router-dom';
import Ad1 from '../AdImages/ad1.jpg'
import Ad2 from '../AdImages/ad2.jpg'
import Ad3 from '../AdImages/ad3.jpg'
import Ad4 from '../AdImages/ad4.jpg'
import Ad5 from '../AdImages/ad5.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle, faEnvelope, faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faPowerOff, faHome} from "@fortawesome/free-solid-svg-icons";

const profile = <FontAwesomeIcon icon={faUserCircle} />;
const DM = <FontAwesomeIcon icon={faEnvelope} />;
const signout = <FontAwesomeIcon icon={faPowerOff} />;
const home = <FontAwesomeIcon icon={faHome} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function Header() {
        let randomPicArr = [Ad1,Ad2,Ad3,Ad4,Ad5];
        let randomPic = Math.floor(Math.random()*5);

        const {user, setUser, loggedIn, setLoggedIn} = useContext(Context)
        if (!loggedIn) return <Redirect to='/'/>
        function signOut(){
          setUser({})
          setLoggedIn(false)
        }

    return(
        <>
        <img src={randomPicArr.[randomPic]} alt='advertisment'/>
        <div>
            <Link to={'/home'}><i className="iconSize btn">{home}</i></Link>
            <Link to={`/profile/${user.username}`}><i className="iconSize btn">{profile}</i></Link>
            <Link to={'/bookmarks'}><i className="iconSize btn">{bookmark}</i></Link>
            <Link to={'/messages'}><i className="iconSize btn">{DM}</i></Link>
            <Link><i className='signOut iconSize btn' onClick={signOut}>{signout}</i></Link>
        </div>
        </>
    )
}

export default Header;