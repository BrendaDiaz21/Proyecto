document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.getElementById("tablaUsuarios");
    const searchInput = document.getElementById("searchInput");
    const dataTable = document.getElementById("dataTable");

    // Verificar si los elementos existen antes de trabajar con ellos
    if (tabla) {
        tabla.addEventListener("click", (event) => {
            const target = event.target;

            // Función para habilitar edición
            if (target.classList.contains("editar")) {
                const fila = target.closest("tr");
                fila.querySelectorAll("td[contenteditable='false']").forEach(td => {
                    td.setAttribute("contenteditable", "true");
                });

                // Deshabilitar botón Editar y habilitar Guardar
                target.setAttribute("disabled", "true");
                const botonGuardar = fila.querySelector(".guardar");
                if (botonGuardar) {
                    botonGuardar.removeAttribute("disabled");
                }
            }

            // Función para guardar cambios
            if (target.classList.contains("guardar")) {
                const fila = target.closest("tr");
                fila.querySelectorAll("td[contenteditable='true']").forEach(td => {
                    td.setAttribute("contenteditable", "false");
                });

                // Deshabilitar botón Guardar y habilitar Editar
                target.setAttribute("disabled", "true");
                const botonEditar = fila.querySelector(".editar");
                if (botonEditar) {
                    botonEditar.removeAttribute("disabled");
                }

                // (Opcional) Aquí podrías enviar los datos actualizados al servidor o manejarlos en el frontend.
                console.log("Datos guardados de la fila:", fila);
            }
        });
    }

    // Función de búsqueda
    function buscarEnTabla() {
        if (!searchInput || !dataTable) return;

        const input = searchInput.value.toLowerCase();
        const rows = dataTable.getElementsByTagName("tr");

        // Itera sobre las filas del cuerpo de la tabla
        for (let i = 1; i < rows.length; i++) { // Asume que la fila 0 es el encabezado
            const cells = rows[i].getElementsByTagName("td");
            let match = false;

            // Itera sobre las celdas de la fila
            for (let j = 0; j < cells.length; j++) {
                if (cells[j].textContent.toLowerCase().includes(input)) {
                    match = true;
                    break;
                }
            }

            // Muestra u oculta la fila según el resultado
            rows[i].style.display = match ? "" : "none";
        }
    }

    // Agregar evento de búsqueda al input
    if (searchInput) {
        searchInput.addEventListener("input", buscarEnTabla);
    }
});
