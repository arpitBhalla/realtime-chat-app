import React from 'react';
import ReactDom from 'react-dom'
import App from './src/App'
import Firebase from './src/components/Firebase'
import FirebaseContext from './src/context/FirebaseContext'


const Index = () => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <App/>
        </FirebaseContext.Provider>
    );
}

ReactDom.render(<Index/>,document.getElementById("root"))
