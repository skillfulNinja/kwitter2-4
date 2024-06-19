
var firebaseConfig = {
      apiKey: "AIzaSyBFR2VOZ2GzgHMYyNqAZKoxsaYJppmkM68",
      authDomain: "kwitter-7fb86.firebaseapp.com",
      databaseURL: "https://kwitter-7fb86-default-rtdb.firebaseio.com",
      projectId: "kwitter-7fb86",
      storageBucket: "kwitter-7fb86.appspot.com",
      messagingSenderId: "671083150194",
      appId: "1:671083150194:web:0f8c753dc17ad9530cfbeb",
      measurementId: "G-E3CKHF0HXB"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id+"+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"   
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}