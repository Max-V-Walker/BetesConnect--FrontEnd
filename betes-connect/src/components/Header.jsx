import React, { useContext } from "react";
import { Context } from "./Context";
import { Redirect } from 'react-router-dom'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

// const signout = <FontAwesomeIcon icon={faPowerOff} />;


function Header() {
    // const {user, setUser, loggedIn, setLoggedIn} = useContext(Context)
    // if (!loggedIn) return <Redirect to='/'/>
    // function signOut(){
    //   setUser({})
    //   setLoggedIn(false)
    // }

    return(
        <p>I'm header</p>

    )

}

export default Header;