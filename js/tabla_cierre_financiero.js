document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.getElementById("tablaCierreFinanciero");

    tabla.addEventListener("click", (event) => {
        const target = event.target;

        if (target.classList.contains("editar")) {
            // Habilitar edición
            const fila = target.closest("tr");
            fila.querySelectorAll("td[contenteditable='false']").forEach(td => {
                td.setAttribute("contenteditable", "true");
            });

            // Deshabilitar botón Editar y habilitar Guardar
            target.setAttribute("disabled", "true");
            fila.querySelector(".guardar").removeAttribute("disabled");
        }

        if (target.classList.contains("guardar")) {
            // Guardar cambios
            const fila = target.closest("tr");
            fila.querySelectorAll("td[contenteditable='true']").forEach(td => {
                td.setAttribute("contenteditable", "false");
            });

            // Deshabilitar botón Guardar y habilitar Editar
            target.setAttribute("disabled", "true");
            fila.querySelector(".editar").removeAttribute("disabled");
        }
    });
});
