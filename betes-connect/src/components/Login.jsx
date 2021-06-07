import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from './Context';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
    const {baseURL, setUser, setLoggedIn, loggedIn} = useContext(Context)
    const [passwordShown, setPasswordShown] = useState(false)

    if (loggedIn) return <Redirect to='/home' />

    async function fetchUserInfo(username, password) {
        const url = `${baseURL}/users/${username}`

        const axiosResponse = await axios.get(url)
        if (axiosResponse.data === null ) {
          alert('Please enter valid username and password')
          console.log('axios returned data null')
        } else if (axiosResponse.data.username === username && axiosResponse.data.password === password){
          setUser(axiosResponse.data)
          setLoggedIn(true)
        } 
      }

    function handleLogin(e) {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        fetchUserInfo(username, password)
    }

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div>
            <h3>Log In</h3>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <input type='text' placeholder='Enter your username' name='username'/>
                </div>
                <div>
                    <label>Password <i onClick={togglePasswordVisiblity}>{eye}</i> </label>
                    <input type={passwordShown ? "text" : "password"} placeholder='Enter your password' name='password' /> 
                </div>
                <div>
                    <button type="submit">Login</button> 
                </div>
                <div>
                    <a href="#">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
}

export default Login;