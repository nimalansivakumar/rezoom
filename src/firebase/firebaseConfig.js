import firebase from "firebase/compat/app"
import "firebase/compat/storage";

const firebaseApp = {
    apiKey: "AIzaSyAjMwZvBFoUl03xnLItkk6H7NPnNPEes5s",
    authDomain: "rezoom-2fa7a.firebaseapp.com",
    projectId: "rezoom-2fa7a",
    storageBucket: "rezoom-2fa7a.appspot.com",
    messagingSenderId: "369667764537",
    appId: "1:369667764537:web:6b2c5cfc6605d35f3578e8"
};

firebase.initializeApp(firebaseApp);
export const firebaseStorage = firebase.storage()
export default firebase;