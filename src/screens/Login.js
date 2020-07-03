import React from 'react';
import { withAuthorize,withFirebase } from '../hooks'
import  ROLES from '../constants/roles'

const Login = ({firebase}) => {
    // console.log(firebase)
    // firebase.loginWithPhone("+919996577213")
    return (
        <>zdf</>
    );
}

export default withAuthorize(ROLES.SHOULD_NOT_LOGGEDIN)(withFirebase(Login));