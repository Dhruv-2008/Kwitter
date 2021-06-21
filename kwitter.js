function addUser(e){
    window.location="kwitter_room.html";
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
}

firebase.initializeApp({
  // Your firebase configuration object
});

const appCheck = firebase.appCheck();
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
appCheck.activate('abcdefghijklmnopqrstuvwxy-1234567890abcd');
