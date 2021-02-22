var firebaseConfig = {
      apiKey: "AIzaSyA_QOA1xp7WXZLcdDAezLz0wjqw3mwap9s",
      authDomain: "kwitter-1eb2e.firebaseapp.com",
      databaseURL: "https://kwitter-1eb2e-default-rtdb.firebaseio.com",
      projectId: "kwitter-1eb2e",
      storageBucket: "kwitter-1eb2e.appspot.com",
      messagingSenderId: "828713657443",
      appId: "1:828713657443:web:fafdbd58216c673f260456"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
var room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+Room_names);
var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}