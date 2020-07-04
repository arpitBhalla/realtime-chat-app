import React from 'react';
import ReactDom from 'react-dom'
import R from './src/layouts/login'
import './App.css'
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
// import App from './src/App'
// import Firebase from './src/util/Firebase'
// import { FirebaseContext } from './src/context'


// const Index = () => {
//     return (
//         <FirebaseContext.Provider value={new Firebase()}>
//             <App />
//         </FirebaseContext.Provider>
//     );
// }
const Index=()=><ThemeProvider theme={theme}><R/></ThemeProvider>
ReactDom.render(<Index />, document.getElementById("root"))

