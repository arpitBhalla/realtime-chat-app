import React from 'react';
import {Redirect } from 'react-router-dom'
import AuthUserContext from './AuthSession';
import { withFirebase } from './FirebaseContext';
import * as ROUTES from '../constants/routes';

export default condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            console.log("AUTHOTIZE PROPS",this.props)
            this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
                if (!condition(authUser)) {
                    this.setState({})
                }
            });
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition(authUser) ? <Component {...this.props} /> : <Redirect to={ROUTES.SIGN_IN}/>
                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    return withFirebase(WithAuthorization);
};
