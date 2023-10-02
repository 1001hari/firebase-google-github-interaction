/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.int';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const GoogleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const hangleGoogleSingin = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleGithublogin = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <button onClick={hangleGoogleSingin}>Google login</button>
            <button onClick={handleGithublogin}>Github login</button>

            {user && <div>
                    <h3>User: {user.displayName} </h3>
                    <p>Email: {user.email}</p>

                </div>


            }
        </div>
    );
};

export default Login;