import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  // Auth API

  addAuthObserver = func => {
    this.auth.onAuthStateChanged(func);
  };

  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => {
    return this.auth.sendPasswordResetEmail(email);
  };

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // User Info

  getUserEmail = () => {
    const user = this.auth.currentUser;

    return user === null ? null : user.email;
  };

  getUserDisplayName = () => {
    const user = this.auth.currentUser;

    return user === null ? null : user.displayName;
  };

  getUserUID = () => {
    const user = this.auth.currentUser;

    return user === null ? null : user.uid;
  };

  setUserProfile = profile => {
    return this.auth.currentUser.updateProfile(profile);
  };

  // Firestore API

  getDatabase = () => {
    return this.db;
  };
}

export default Firebase;
