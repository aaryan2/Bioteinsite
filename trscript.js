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
  
  firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          console.log("not logged in");
          window.location.replace("/index.html");
        }
      });
  console.log(btnLogout);
  btnLogout.addEventListener('click', e => {
      auth.signOut();
      console.log("omg why");
      console.log("yay");
    });
}());
