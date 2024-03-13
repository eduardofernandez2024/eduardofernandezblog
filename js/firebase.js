
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, update, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyDunUUYaxITBW8TtcGgDYS384N-BgXpy0Y",
authDomain: "test-50b62.firebaseapp.com",
databaseURL: "https://test-50b62-default-rtdb.firebaseio.com",
projectId: "test-50b62",
storageBucket: "test-50b62.appspot.com",
messagingSenderId: "1052110939946",
appId: "1:1052110939946:web:d3271cff336b20f9e62053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



function limpiarCampos() {
    // Limpiar los valores de los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("contacto").value = "";
    document.getElementById("mensaje").value = "";
}
