document.addEventListener('DOMContentLoaded', () => {
    const inventariosBody = document.getElementById('inventariosBody');

    inventariosBody.addEventListener('click', (event) => {
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
            // Guardar edición
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
            codigo: celdas[0].innerText,
            fecha: celdas[1].innerText,
            entrada: celdas[2].innerText,
            salida: celdas[3].innerText,
            lote: celdas[4].innerText,
            responsable: celdas[5].innerText
        };
    }
});
