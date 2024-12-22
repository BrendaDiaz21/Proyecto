document.addEventListener('DOMContentLoaded', () => {
    const desechosBody = document.getElementById('desechosBody');

    desechosBody.addEventListener('click', (event) => {
        const row = event.target.closest('tr');

        if (event.target.classList.contains('edit-btn')) {
            // Activar edición
            row.querySelectorAll('td[contenteditable="false"]').forEach(td => {
                td.contentEditable = "true";
                td.style.backgroundColor = "#e9ecef";
            });
            event.target.style.display = "none"; // Ocultar botón Editar
            row.querySelector('.save-btn').style.display = "inline-block"; // Mostrar botón Guardar
        } 
        else if (event.target.classList.contains('save-btn')) {
            // Guardar cambios
            row.querySelectorAll('td[contenteditable="true"]').forEach(td => {
                td.contentEditable = "false";
                td.style.backgroundColor = ""; // Restaurar fondo
            });
            event.target.style.display = "none"; // Ocultar botón Guardar
            row.querySelector('.edit-btn').style.display = "inline-block"; // Mostrar botón Editar

            // Mostrar datos guardados (puedes integrarlo con un servidor)
            console.log('Datos guardados:', obtenerDatosFila(row));
        } 
        else if (event.target.classList.contains('delete-btn')) {
            // Eliminar fila
            row.remove();
            console.log('Fila eliminada');
        }
    });

    function obtenerDatosFila(row) {
        const celdas = row.querySelectorAll('td:not(:last-child)');
        return Array.from(celdas).map(celda => celda.innerText);
    }
});
