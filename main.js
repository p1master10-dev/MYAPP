location.replace('http://127.0.0.1:5500/signup.html');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCS0M6JSssDg4U0dYF9LoJXNLbr7HCNA6A",
    authDomain: "form-e9971.firebaseapp.com",
    projectId: "form-e9971",
    storageBucket: "form-e9971.appspot.com",
    messagingSenderId: "170017226013",
    appId: "1:170017226013:web:7ea607d1535af93fb7f5f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
  
function signOut(){
      auth.signOut();
      alert('Signed Out !');

      location.replace('http://127.0.0.1:5500/signup.html')
  }