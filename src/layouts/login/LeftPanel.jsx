import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flex: "1",
        display: "flex"
    },
});

const LeftPanel = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            fd
        </div>
    );
}

export default LeftPanel;