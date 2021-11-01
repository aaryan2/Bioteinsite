const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
(function() {
  const config = {
    apiKey: "AIzaSyAHBi5YuMpI0DhPV9Fj5vIPD5QGkAHNs1c",
    authDomain: "biotein-user-site.firebaseapp.com",
    projectId: "biotein-user-site",
    storageBucket: "biotein-user-site.appspot.com",
    messagingSenderId: "569491090615",
    appId: "1:569491090615:web:61ea205b1e50b597ce3132",
    measurementId: "G-T6ZE7K8L92"
  };
  firebase.initializeApp(config);
  const auth = firebase.auth();
  console.log(firebase);
  console.log(auth);
  // Initialize Firebase
  firebase.analytics();
  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    auth.signInWithEmailAndPassword(email, pass);
    // promise.catch(e => console.log(e.message));
  });
   btnSignup.addEventListener('click', e => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      auth.createUserWithEmailAndPassword(email, pass);
      // promise
      //   .catch(e => console.log(e.message));
   });
  firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("You're in");                                       
          if(window.location.href!="/tracking.html") {
            var em = document.getElementById('txtEmail');
            localStorage.setItem('emailLocalStorage', em.value);  
            window.location.replace("/tracking.html");   
          }
        } else {
          console.log("not logged in");
        }
      });
  console.log(btnLogout);
  btnLogout.addEventListener('click', e => {
      auth.signOut();
      window.location.replace("/index.html");
      console.log("omg why");
      console.log("yay");
    });
  firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("You're in");
          window.location.replace("/tracking.html");
        }
      });
  // auth.setPersistence(auth.Auth.Persistence.SESSION)
  //   .then(() => {
  //     // Existing and future Auth states are now persisted in the current
  //     // session only. Closing the window would clear any existing state even
  //     // if a user forgets to sign out.
  //     // ...
  //     // New sign-in will be persisted with session persistence.
  //     return auth.signInWithEmailAndPassword(txtEmail, txtPassword);
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //   });

}());
