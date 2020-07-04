import React from 'react';
import { withAuthorize, withFirebase } from '../hooks'
import ROLES from '../constants/roles'
import Component  from '../layouts/login'


const Login = ({ firebase }) => {
    // console.log(firebase)
    // firebase.loginWithPhone("+919996577213")
    return (
        <Component/>

    );
}

export default withAuthorize(ROLES.SHOULD_NOT_LOGGEDIN)(withFirebase(Login));