import firebase from 'firebase/app';
import 'firebase/analytics';

import '../styles/globals.css'

const firebaseConfig = {
    apiKey: "AIzaSyBh-dJhlqxw91KQj_rcTq9hbsU4sGQXTJM",
    authDomain: "wncw-288909.firebaseapp.com",
    projectId: "wncw-288909",
    storageBucket: "wncw-288909.appspot.com",
    messagingSenderId: "140773128605",
    appId: "1:140773128605:web:2f2680fc0491fb9eaa9774",
    measurementId: "G-2Q0Z9SH1X6"
};
// Initialize Firebase
try {
    if (typeof window != undefined) {
        firebase.initializeApp(firebaseConfig)
        firebase.analytics()
    }
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps }
    />
}

export default MyApp