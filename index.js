// console.log("Hola perros");
// let nombre = window.prompt("Escribe tu nombre");
// console.log(nombre);

// const botonLogin = document.getElementById("botonLogin");
// // botonLogin.addEventListener("click", () => {

function loginRedirect(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "a@gmail.com" && password === "a") {
        localStorage.setItem("usuario", email); // Guarda el usuario con la clave correcta
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

// function loginRedirect(event) {
//     event.preventDefault();
//
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//
//     // Validar usuario y contraseña
//     if (email === "a@gmail.com" && password === "a") {
//         localStorage.setItem("usuario", email); // Guarda el usuario en localStorage
//         window.location.href = "index.html"; // Redirige a index.html
//     } else {
//         alert("Usuario o contraseña incorrectos");
//     }
// }
