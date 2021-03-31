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
      var email = document.getElementById('email');
      var password = document.getElementById('password');

      const promise = auth.createUserWithEmailAndPassword(email.value , password.value);
      promise.catch(e => alert(e.message));

      alert('New account created !');

      location.replace('https://p1master10-dev.github.io/MYAPP/index.html');
  }

  function signIn(){
    var email2 = document.getElementById('email');
    var password2 = document.getElementById('password');

    const promise = auth.signInWithEmailAndPassword(email2.value , password2.value);
    promise.catch(e => alert(e.message));

    alert('Signed In ! ' + email);

    location.replace('https://p1master10-dev.github.io/MYAPP/index.html');
  }

  function signOut(){
      auth.signOut();
      alert('Signed Out !');

      location.replace('https://p1master10-dev.github.io/MYAPP/signup.html')
  }

  auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        alert('Active User ' + email);

        location.replace('https://p1master10-dev.github.io/MYAPP/index.html');
    }else{
       alert('No Account Active !');

    }
  });