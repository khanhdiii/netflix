import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqkxa37PeutL5mcwfiaeu4iE33eJIXBDk',
  authDomain: 'netflix-app-36b35.firebaseapp.com',
  projectId: 'netflix-app-36b35',
  storageBucket: 'netflix-app-36b35.appspot.com',
  messagingSenderId: '966777528859',
  appId: '1:966777528859:web:082c89c14c1f115efb4ebe',
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
