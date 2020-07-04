import React, { Component } from 'react';
import 'react-phone-input-2/lib/material.css'
import PhoneInput from 'react-phone-input-2'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/OutlinedInput'
import MaskedInput from '../../components/MaskedInput'

import './login.scss'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        };
    }
    render() {
        return (
            <div className="loginPanel">
                <div className="leftPanel">
                </div>
                <div className="rightPanel">
                    <div className="formInput">
                <Input/>
                      <MaskedInput
                      label="SDt"
                      />
                        <PhoneInput
                            disableDropdown
                            placeholder="Phone"
                            alwaysDefaultMask
                            onChange={v => console.log(v)}
                            defaultMask={"..... ....."}
                            defaultErrorMessage={"Enter valid Phone Number"}
                            country={'in'}
                            onlyCountries={['in']}
                            value={this.state.phone}
                            onChange={phone => this.setState({ phone })}
                        />
                        <PhoneInput
                            disableCountryCode
                            disableSearchIcon
                            country={'in'}
                            onlyCountries={["in"]}
                            copyNumbersOnly={false}
                            defaultMask={". . . . . ."}
                            placeholder={"Enter OTP"}
                            alwaysDefaultMask
                            disableDropdown />
                        <Button>sdg</Button>
                        {/* <TextField
                            id="outlined-secondary"
                            label="Outlined secondary"
                            variant="outlined"
                            color="secondary"
                        />
                        
                        <Button
                            variant="contained"
                            color="primary">
                                Verify Phone
                            </Button> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;