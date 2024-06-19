
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyBFR2VOZ2GzgHMYyNqAZKoxsaYJppmkM68",
      authDomain: "kwitter-7fb86.firebaseapp.com",
      databaseURL: "https://kwitter-7fb86-default-rtdb.firebaseio.com",
      projectId: "kwitter-7fb86",
      storageBucket: "kwitter-7fb86.appspot.com",
      messagingSenderId: "671083150194",
      appId: "1:671083150194:web:0f8c753dc17ad9530cfbeb",
      measurementId: "G-E3CKHF0HXB"
    };
  
    function addUser()
    {
      user_name = document.getElementById("user_name").value;
      firebase.databaseURL().ref("/").child(user_name).update({
          purpose : "adding user"
      });
    }
