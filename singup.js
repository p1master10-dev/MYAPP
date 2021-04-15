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

  function signUp(){
      var email = document.getElementById('email-signup');
      var password = document.getElementById('password-signup');

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    if (promise.catch(e => alert(e.message)) == true) {
        
    } else {
      alert('New account created !');

       location.replace('http://127.0.0.1:5500/index.html');
      }
  }

  function signIn(){
    var email = document.getElementById('email-signin');
    var password = document.getElementById('password-signin');

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    if (promise.catch(e => alert(e.message)) == true && promise.catch(e => alert(e.message)) !== 'Signed In ! [object HTMLInputElement]') {
      
    } else {
      alert('Signed In ! ' + email);

      location.replace('http://127.0.0.1:5500/index.html');
    }
  }

  auth.onAuthStateChanged(function(user){
    if(user){
        var email2 = user.email;
        alert('Active User ' + email2);

        location.replace('http://127.0.0.1:5500/index.html');
    }else{
       alert('No Account Active !');

    }
  });