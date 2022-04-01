
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA5LapB_-MMHSaS_wRAQU0hDaHecxBoFYE",
      authDomain: "rattle-5dadd.firebaseapp.com",
      databaseURL: "https://rattle-5dadd-default-rtdb.firebaseio.com",
      projectId: "rattle-5dadd",
      storageBucket: "rattle-5dadd.appspot.com",
      messagingSenderId: "580865150517",
      appId: "1:580865150517:web:1d539e930e91bc9a3fab7c"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

      var welcome_user=localStorage.getItem("username_key")
      document.getElementById("welcome").innerHTML = "Welcome "+welcome_user+"!"

   function addroom(){
         var roomname=document.getElementById("myroom").value;
         firebase.database().ref('/').child(roomname).update({purpose:"addroom"})
         localStorage.setItem("roomname_key",roomname)
         window.location="message.html";
         
   }   
   function logout(){
         localStorage.removeItem("username_key")
         localStorage.removeItem("roomname_key")
         window.location="index.html";
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='roomname'id='"+Room_names+"'onclick='changeroomname(this.id)'>"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function changeroomname(name){
      localStorage.setItem("roomname_key",name)
      window.location="message.html";
}
