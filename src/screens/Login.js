import React from 'react';
import { withFirebase } from '../context/FirebaseContext'

const Login = ({firebase}) => {
    console.log(firebase)
    // firebase.loginWithPhone("+919996577213")
    return (
        <><div id="recaptcha-container"></div></>
    );
}

export default withFirebase(Login);