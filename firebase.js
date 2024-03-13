        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
        import { getDatabase, ref, push, set, onValue, remove } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
    
        const firebaseConfig = {
            apiKey: "AIzaSyDunUUYaxITBW8TtcGgDYS384N-BgXpy0Y",
            authDomain: "test-50b62.firebaseapp.com",
            databaseURL: "https://test-50b62-default-rtdb.firebaseio.com",
            projectId: "test-50b62",
            storageBucket: "test-50b62.appspot.com",
            messagingSenderId: "1052110939946",
            appId: "1:1052110939946:web:d3271cff336b20f9e62053"
        };
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        const contactForm = document.getElementById('contactForm');
        const tableBody = document.getElementById('tableBody');
        const messageRef = ref(db, 'messages');
    
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    
            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const correo = document.getElementById('correo').value;
            const contacto = document.getElementById('contacto').value;
            const mensaje = document.getElementById('mensaje').value;
    
            // Guardar datos en Firebase Realtime Database
            const newMessageRef = push(ref(db, 'messages'));
            set(newMessageRef, {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                contacto: contacto,
                mensaje: mensaje,
            }).then(() => {
                alert('Mensaje enviado correctamente!');
                // Limpiar los campos del formulario después de enviarlo
                document.getElementById('nombre').value='';
                document.getElementById('apellido').value='';
                document.getElementById('correo').value='';
                document.getElementById('contacto').value='';
                document.getElementById('mensaje').value='';
            }).catch((error) => {
                console.error('Error enviando mensaje:', error);
                alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
            });
        });
    
        function displayData(snapshot) {
            tableBody.innerHTML = '';
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                const key = childSnapshot.key; // Obtener la clave de la instantánea
    
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${childData.nombre}</td>
                    <td>${childData.apellido}</td>
                    <td>${childData.correo}</td>
                    <td>${childData.contacto}</td>
                    <td>${childData.mensaje}</td>
                    <td class='text-center' wd='25'>
                        <button type="button" class="btn btn-warning btn-sm" >
                            Modificar
                        </button>
                        <button type="button" class="btn btn-danger btn-sm" onclick="eliminarMensaje('${key}')">
                            Eliminar
                        </button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }
    
        // Función para eliminar un mensaje
        function eliminarMensaje(key) {
            if (confirm("¿Estás seguro de que deseas eliminar este mensaje?")) {
                remove(ref(db, `messages/${key}`))
                .then(() => {
                    alert('Mensaje eliminado correctamente.');
                })
                .catch((error) => {
                    console.error('Error eliminando mensaje:', error);
                    alert('Hubo un error al eliminar el mensaje. Por favor, inténtalo de nuevo más tarde.');
                });
            }
        }    
        onValue(ref(db, 'messages'), (snapshot) => {
            displayData(snapshot);
        });
        window.eliminarMensaje = function(key) {
            if (confirm("¿Estás seguro de que deseas eliminar este mensaje?")) {
                remove(ref(db, `messages/${key}`))
                .then(() => {
                    alert('Mensaje eliminado correctamente.');
                })
                .catch((error) => {
                    console.error('Error eliminando mensaje:', error);
                    alert('Hubo un error al eliminar el mensaje. Por favor, inténtalo de nuevo más tarde.');
                });
            }
        }
        
    