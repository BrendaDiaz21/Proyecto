// Función para validar el usuario y la contraseña
function validarUsuario(event) {
  // Evitar el envío del formulario
  event.preventDefault();

  // Credenciales predeterminadas
  const usuarioCorrecto = "manichiapas@gmail.com";
  const contrasenaCorrecta = "123";


  // Obtener valores ingresados
  const usuario = document.getElementById("username").value;
  const contrasena = document.getElementById("password").value;

  // Verificar credenciales
  if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
    alert("Inicio de sesión exitoso");
    window.location.href = "menu.html"; // Redirige a la página de menú
    return true;
  } else {
    document.getElementById("mensaje").textContent = "Usuario o contraseña incorrectos";
    return false;
  }
}

// Función para mostrar una sección específica
function mostrarFormulario(idSeccion) {
  // Oculta todas las secciones
  const secciones = document.querySelectorAll('section');
  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });

  // Muestra la sección seleccionada
  const seccionMostrar = document.getElementById(idSeccion);
  if (seccionMostrar) {
    seccionMostrar.style.display = 'block';
  }
}
