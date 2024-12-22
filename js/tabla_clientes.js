document.addEventListener('DOMContentLoaded', () => {
    const clientesBody = document.getElementById('clientesBody');

    clientesBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) {
            // Activar edición
            const row = event.target.closest('tr');
            row.querySelectorAll('td[contenteditable="false"]').forEach(td => {
                td.contentEditable = "true";
                td.style.backgroundColor = "#e9ecef";
            });
            event.target.style.display = "none"; // Ocultar botón Editar
            row.querySelector('.save-btn').style.display = "inline-block"; // Mostrar botón Guardar
        } else if (event.target.classList.contains('save-btn')) {
            // Guardar cambios
            const row = event.target.closest('tr');
            row.querySelectorAll('td[contenteditable="true"]').forEach(td => {
                td.contentEditable = "false";
                td.style.backgroundColor = ""; // Restaurar fondo
            });
            event.target.style.display = "none"; // Ocultar botón Guardar
            row.querySelector('.edit-btn').style.display = "inline-block"; // Mostrar botón Editar

            // Aquí podrías enviar los datos editados al servidor
            console.log('Datos guardados:', obtenerDatosFila(row));
        }
    });

    function obtenerDatosFila(row) {
        const celdas = row.querySelectorAll('td');
        return {
            nombre: celdas[0].innerText,
            telefono: celdas[1].innerText,
            direccion: celdas[2].innerText,
            empresa: celdas[3].innerText,
            correo: celdas[4].innerText
        };
    }
});
