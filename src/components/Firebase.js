import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAwAGku4sYMLvfs6-lNl_x6wIOFCeB0Gzk",
  authDomain: "ii2019.firebaseapp.com",
  databaseURL: "https://ii2019.firebaseio.com",
  projectId: "ii2019",
  storageBucket: "ii2019.appspot.com",
  messagingSenderId: "169891223088",
  appId: "1:169891223088:web:81f12e8edcf59cd4"
};

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(config);
    }

    this.auth = app.auth();
    this.applicationVerifier = new app.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible"
    })
  }
  loginWithPhone = (phone) => {
    this.auth.signInWithPhoneNumber(phone, this.applicationVerifier)
      .then(confirm => {

      })
      .catch(err =>
        console.log("ZXGCSD", err.message)
      )
  }
}

export default Firebase;