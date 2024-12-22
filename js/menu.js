// Función para cerrar sesión
function cerrarSesion() {
  const confirmar = confirm("¿Estás seguro de que deseas cerrar sesión?");
  if (confirmar) {
    window.location.href = "index.html"; // Redirige a la página de inicio de sesión
  }
}

