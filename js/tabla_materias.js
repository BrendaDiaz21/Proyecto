
    document.addEventListener("DOMContentLoaded", () => {
        const tabla = document.getElementById("tabla_materias.html");

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
                fila.querySelector(".guardar").removeAttribute("disabled");
            }

            // Función para guardar cambios
            if (target.classList.contains("guardar")) {
                const fila = target.closest("tr");
                const entradaCell = fila.querySelector('.entrada');
                const salidaCell = fila.querySelector('.salida');
                const stockCell = fila.querySelector('.stock');
                const fechaSalidaCell = fila.querySelector('.fecha-salida');
                const responsableSalidaCell = fila.querySelector('.responsable-salida');

                // Validar que entrada y salida sean números válidos
                const entrada = parseFloat(entradaCell.textContent) || 0;
                const salida = parseFloat(salidaCell.textContent) || 0;

                if (isNaN(entrada) || isNaN(salida)) {
                    alert("Por favor, introduce valores numéricos válidos para entrada y salida.");
                    return;
                }

                // Validar que la salida no exceda la entrada
                if (salida > entrada) {
                    alert("La cantidad de salida no puede ser mayor que la cantidad de entrada.");
                    return;
                }

                // Calcular nuevo stock
                const nuevoStock = entrada - salida;
                stockCell.textContent = nuevoStock;

                // Deshabilitar edición de campos
                fila.querySelectorAll("td[contenteditable='true']").forEach(td => {
                    td.setAttribute("contenteditable", "false");
                });

                // Deshabilitar botón Guardar y habilitar Editar
                target.setAttribute("disabled", "true");
                fila.querySelector(".editar").removeAttribute("disabled");

                // Confirmación visual o de sistema (opcional)
                console.log(`Stock actualizado a: ${nuevoStock}`);
            }
        });
    });

