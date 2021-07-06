var firebaseConfig = {
    apiKey: "AIzaSyAV6oclNzjFgLpFMlfs91grDCDW7eyO6g8",
    authDomain: "let-schat-aeadc.firebaseapp.com",
    projectId: "let-schat-aeadc",
    storageBucket: "let-schat-aeadc.appspot.com",
    messagingSenderId: "864598072963",
    appId: "1:864598072963:web:908893a613f96349c485b6",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user to Hitesh DB",
    });
   window.location="chat.html";  
  }