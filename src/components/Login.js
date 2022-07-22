import React from 'react';
import "./Login.css";
import {login, logout} from "../features/counter/userSlice"
import { Button } from '@mui/material';
import {db, auth, provider} from '../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux';




function Login() {
    const dispatch= useDispatch();
    const auth = getAuth();

    

    const signIn=()=>{
        signInWithPopup(auth, provider)
        .then(({user}) => {
            dispatch(login({
                displayName:user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message))

    }



    return (
        <div className='login'>
            <div className='login__container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png?20201210105308" alt=""/>
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}

export default Login;
