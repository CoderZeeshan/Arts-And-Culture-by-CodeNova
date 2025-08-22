// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsWQBoIY5XVgOAoEoG70u1GO7g_j5P7oQ",
    authDomain: "login-page-a5845.firebaseapp.com",
    projectId: "login-page-a5845",
    storageBucket: "login-page-a5845.firebasestorage.app",
    messagingSenderId: "238391657537",
    appId: "1:238391657537:web:40c8c5197fb3c54f8632c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Inputs
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
// submit button
const submit = document.getElementById('submit');
submit.addEventListener('click',function(event){
    event.preventDefault()
    alert('Login Successful')
})