import React from 'react';
import { Redirect } from 'react-router-dom'
import { AuthUserContext } from '../context';
import withFirebase  from './Firebase';

export default (condition) => Component => {
    class WithAuthorization extends React.Component {
        // componentDidMount() {
            // console.log("AUTHOTIZE PROPS", this.props)
            // this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            //     if (!condition(authUser)) {
            //         this.setState({})
            //     }
            // });
        // }

        // componentWillUnmount() {
        //     this.listener();
        // }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition.verifier(authUser) ? <Component {...this.props} /> : <Redirect to={condition.ifNot} />
                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    return withFirebase(WithAuthorization);
};
