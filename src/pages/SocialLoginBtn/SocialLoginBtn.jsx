import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    GithubAuthProvider,
  } from "firebase/auth";
import app from '../../firebase/firebase.config';
 
 

const SocialLoginBtn = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  
    const handleGoogleLogin = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          setUser(user);
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    };
  
    const handleGithubLogin = () => {
      signInWithPopup(auth, githubProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
        });
    };
    return (
        <div>
             <Button  onClick={handleGoogleLogin} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button  onClick={handleGithubLogin} variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
        </div>
    );
};

export default SocialLoginBtn;