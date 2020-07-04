import React, { Component } from 'react';
import './login.scss'
import RightPanel from './RightPanel'
import LeftPanel from './LeftPanel'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: "100vh",
        background: 'url(https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?cs=srgb&dl=flock-of-birds-917494.jpg&fm=jpg)',
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        padding: "2%"
    },
});

const Login = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LeftPanel/>
            <RightPanel />
        </div>
    );
}

export default Login; 
