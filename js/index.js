// Obtener los elementos que se deben cambiar de color
const parrafos = document.querySelectorAll("p");

// Obtener el botón para cambiar el modo de visualización
const button = document.querySelector("#dark-mode-button");

// Establecer el modo oscuro como el valor predeterminado
let darkMode = localStorage.getItem("darkMode") || "false";

// Aplicar el modo oscuro si es el valor almacenado
if (darkMode === "true") {
  toggleDarkMode();
}

// Escuchar el evento del botón
button.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode") === "true" ? "false" : "true";
  localStorage.setItem("darkMode", darkMode);
  toggleDarkMode();
});

function toggleDarkMode() {
  parrafos.forEach((el) => {
    el.classList.toggle("dark-mode");
  });
  button.innerText = darkMode === "true" ? "Modo Claro" : "Modo Oscuro";
}