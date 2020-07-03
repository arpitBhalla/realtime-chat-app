import React from 'react';
import { withAuthorize } from '../hooks'
import  ROLES from '../constants/roles'

const Home = () => {
    return (
        <>Only Authorized User</>
    );
}

export default withAuthorize(ROLES.SHOULD_LOGGEDIN)(Home);