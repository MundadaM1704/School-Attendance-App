import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDdHwcGe9r5RwDTLy_BM74auRxIxRNr0X4",
  authDomain: "school-attendance-app-4365f.firebaseapp.com",
  databaseURL: "https://school-attendance-app-4365f-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-4365f",
  storageBucket: "school-attendance-app-4365f.appspot.com",
  messagingSenderId: "85874821140",
  appId: "1:85874821140:web:a2c810f75e29ce3f607f01"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
