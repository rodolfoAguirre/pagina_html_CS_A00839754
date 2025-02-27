let usuario = localStorage.getItem("usuario"); // Usa la clave correcta
let saludo = document.getElementById("saludo"); // Obtén el elemento h1
if (usuario) {
    saludo.innerHTML = "Hola " + usuario;
} else {
    window.location.href = "home.html";
}