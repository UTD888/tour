const firebaseConfig = {
  apiKey: "AIzaSyDqd20lb2fQSMjqsSmzUXXgQFhBNC8sB9g",
  authDomain: "luxutour-63450.firebaseapp.com",
  projectId: "luxutour-63450",
  storageBucket: "luxutour-63450.appspot.com",
  messagingSenderId: "349190270077",
  appId: "1:349190270077:web:c52b936bdc2f06c7db1514",
  measurementId: "G-1F45DPS42M"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
window.db = db;

function initFirebaseAuth() {
  firebase.auth().onAuthStateChanged(user => {
    if (user && user.email) {
      document.getElementById('user-email').textContent = user.email;
    } else {
      window.location.href = "login.html";
    }
  });
}
