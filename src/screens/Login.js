import React from 'react';
import { withFirebase } from '../hooks'

const Login = ({firebase}) => {
    console.log(firebase)
    // firebase.loginWithPhone("+919996577213")
    return (
        <>zdf</>
    );
}

export default withFirebase(Login);