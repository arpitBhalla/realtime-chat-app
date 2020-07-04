import React from 'react';
import Button from '@material-ui/core/Button'
import MaskedInput from '../../components/MaskedInput'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
       flex:".6",
       padding:"2%",
       backgroundColor:"#fff",
       display:"flex",
       flexDirection:"column",
       justifyContent:"center",
    //    margin:"7%"
    },
});

const RightPanel = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="formInput">
                <MaskedInput
                    label="Phone Number"
                    mask="99999 99999"
                    startText="+91"
                />
                <MaskedInput
                    label="One Time Password"
                    mask="9 9 9 9 9 9"
                />
                <Button>sdg</Button>
            <Button
                variant="contained"
                color="primary">
                    Verify Phone
                </Button>
            </div>
        </div>
    );
}

export default RightPanel;