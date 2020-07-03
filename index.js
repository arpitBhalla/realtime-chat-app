import React from 'react';
import ReactDom from 'react-dom'
import App from './src/App'
import Firebase from './src/util/Firebase'
import { FirebaseContext } from './src/context'


const Index = () => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <App />
        </FirebaseContext.Provider>
    );
}

ReactDom.render(<Index />, document.getElementById("root"))
