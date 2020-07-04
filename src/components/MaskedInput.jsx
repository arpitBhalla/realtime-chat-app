import React from 'react';
import MaskedInput from 'react-text-mask'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

const convertMask = (mask) => mask.split("").map(v => {
    if (v == "9")
        return /\d/
    return v
})

const Inputa = ({ label, value, onChange, mask = " " }) => (
    <FormControl>
        <InputLabel htmlFor="formatted-text-mask-input">{label}</InputLabel>
        <Input
            value={value}
            name="textmask"
            onChange={onChange}
            id="formatted-text-mask-input"
            inputComponent={({ inputRef, ...other }) => (
                <MaskedInput
                    guide={false}
                    {...other}
                    ref={(ref) => {
                        inputRef(ref ? ref.inputElement : null);
                    }}
                    mask={convertMask(mask)}
                />
            )}
        />
    </FormControl>
);

export default Inputa;
