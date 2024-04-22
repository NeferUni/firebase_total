import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCntm8--LTmBSDhB0AkzSVsuVMfu2q8GAs",
  authDomain: "erudite-visitor-371500.firebaseapp.com",
  projectId: "erudite-visitor-371500",
  storageBucket: "erudite-visitor-371500.appspot.com",
  messagingSenderId: "622372100237",
  appId: "1:622372100237:web:ea52d6b697a1dc270f6ac4",
  measurementId: "G-0TJ4CD5YNK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit button
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //input
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Usuario creado exitosamente");
      window.location.href = "signed_in.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error al crear el usuario: " + errorMessage);
    });
});
