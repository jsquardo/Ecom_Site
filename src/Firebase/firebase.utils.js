import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBdGR1nNlpF5e-t0fFE8XisTYB4Z8B1CBw',
	authDomain: 'ecomweb-b4da3.firebaseapp.com',
	databaseURL: 'https://ecomweb-b4da3.firebaseio.com',
	projectId: 'ecomweb-b4da3',
	storageBucket: 'ecomweb-b4da3.appspot.com',
	messagingSenderId: '931754484073',
	appId: '1:931754484073:web:086a1424ed98f4b7d55df8',
	measurementId: 'G-XCYR8QV6GN'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
