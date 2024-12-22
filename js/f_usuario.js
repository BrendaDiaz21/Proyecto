<script>
    function cargarFormulario(url) {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudo cargar el formulario');
          }
          return response.text();
        })
        .then(html => {
          document.getElementById('formularioContenedor').innerHTML = html;
        })
        .catch(error => {
          console.error(error);
          document.getElementById('formularioContenedor').innerHTML = '<p>Error al cargar el formulario</p>';
        })
    }
  </script>