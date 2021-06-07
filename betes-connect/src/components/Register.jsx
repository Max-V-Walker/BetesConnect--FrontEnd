import axios from 'axios';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Context } from './Context';

function Register() {
    const {baseURL, setUser, loggedIn, setLoggedIn} = useContext(Context)

    if (loggedIn) return <Redirect to='/homepage' />

    async function addUser (newUser) {
        const url = `${baseURL}/users`
        await axios.post(url, newUser)
        setUser(newUser)
        setLoggedIn(true)
    }
    
    function signUp(e) {
        e.preventDefault()
        const newUser = {
            username: e.target.username.value,
            name: e.target.name.value,
            password: e.target.password.value,
            connection: e.target.connection.value,
            dob: e.target.dob.value,
            location: e.target.location.value,
            aboutMe: e.target.aboutMe.value
        }
        addUser(newUser)
    }

    
    return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={signUp}>
                    <div>
                        <input type='text' placeholder='First & Last Name' name='name'/>
                    </div>

                    <div>
                        <input type='text' placeholder='Username' name='username'/>
                    </div>
        
                    <div>
                        <input type='password' placeholder='Password' name='password'/>
                    </div>

                    <div>
                        <input type='text' placeholder='Connection To DB' name='connection'/>
                    </div>

                    <div>
                        <input type='text' placeholder='Date of birth' name='dob'/>
                    </div>

                    <div>
                        <input type='text' placeholder='Location' name='location'/>
                    </div>

                    <div>
                        <input type='text' placeholder='About Me' name='aboutMe'/>
                    </div>

                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
            </form>
        </div>
    );
}

export default Register;