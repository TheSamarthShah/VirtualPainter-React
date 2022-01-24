import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDV0RGznOinNHzCGJRO6k3llmcfrW6ecTs",
    authDomain: "auth-development-e6644.firebaseapp.com",
    projectId: "auth-development-e6644",
    storageBucket: "auth-development-e6644.appspot.com",
    messagingSenderId: 712240170346,
    appId: "1:712240170346:web:d312fc2cf5e24325779113"
})

export const auth = app.auth();
export default app;