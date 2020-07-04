import React from 'react';
import MaskedInput from 'react-text-mask'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
    margin:"3px"  
    }
};

const convertMask = (mask) => mask.split("").map(v => {
    if (v == "9")
        return /\d/
    return v
})

export default withStyles(styles)(({ label, startText, variant, value, onChange, mask = " ", classes, ...props }) => (

    <TextField
        className={classes.root}
        label={label}
        variant={variant || "standard"}
        value={value}
        onChange={onChange}
        InputProps={{
            inputComponent: ({ inputRef, ...other }) => (
                <MaskedInput
                    guide={false}
                    {...other}
                    ref={(ref) => {
                        inputRef(ref ? ref.inputElement : null);
                    }}
                    mask={convertMask(mask)}
                />
            ),
            startAdornment: startText && <InputAdornment position="start">{startText || ""}</InputAdornment>,
        }}
    />
))