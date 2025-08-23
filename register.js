// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase config
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
const auth = getAuth(app);

// Register form submit
const submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value; // not stored in Firebase yet
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // ✅ Save user login state
            localStorage.setItem("registered", "true");
            // ✅ Redirect to home
            window.location.href = "home.html";
        })
        .catch((error) => {
            document.getElementById('error-message').innerText = error.message;
        });
});
