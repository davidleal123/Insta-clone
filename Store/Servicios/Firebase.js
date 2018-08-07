import * as firebase from 'firebase';


// Initialize Firebase
const config = {
    apiKey: 'AIzaSyAt6BEzm6xORSOEvSlDrLGuL8AB5RKfWtc',
    authDomain: 'clone-instagram-52bb9.firebaseapp.com',
    databaseURL: 'https://clone-instagram-52bb9.firebaseio.com',
    projectId: 'clone-instagram-52bb9',
    storageBucket: 'clone-instagram-52bb9.appspot.com',
    messagingSenderId: '842192317542',
  };
  firebase.initializeApp(config);

  const autenticacion = firebase.auth;
