import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDr210nE4jgo3Xy0pEA4ZdeJzDDOGgmdTk",
    authDomain: "facebook-clone-27c84.firebaseapp.com",
    projectId: "facebook-clone-27c84",
    storageBucket: "facebook-clone-27c84.appspot.com",
    messagingSenderId: "740122368147",
    appId: "1:740122368147:web:91e5a9e270d30d5ebad566"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;