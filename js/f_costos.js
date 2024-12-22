// Función para habilitar edición en la tabla
document.querySelectorAll('.editar').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const row = btn.closest('tr');
        const cells = row.querySelectorAll('[data-editable]');
        cells.forEach(cell => {
            cell.contentEditable = "true";
            cell.style.backgroundColor = "#eaf7ff";
        });
        btn.nextElementSibling.disabled = false; // Habilitar botón guardar
    });
});

// Función para guardar cambios y actualizar margen
document.querySelectorAll('.guardar').forEach((btn) => {
    btn.addEventListener('click', () => {
        const row = btn.closest('tr');
        const cells = row.querySelectorAll('[data-editable]');
        let costoProduccion = parseFloat(cells[2].innerText);
        let costoVenta = parseFloat(cells[3].innerText);

        if (costoVenta >= costoProduccion) {
            const margen = (costoVenta - costoProduccion).toFixed(2);
            row.querySelector('td:nth-child(5)').innerText = margen;
        } else {
            alert("El costo de venta debe ser mayor o igual al costo de producción.");
        }

        // Deshabilitar edición
        cells.forEach(cell => {
            cell.contentEditable = "false";
            cell.style.backgroundColor = "white";
        });
        btn.disabled = true; // Deshabilitar botón guardar
    });
});

// Función para imprimir la tabla en PDF
document.getElementById('imprimirPDF').addEventListener('click', () => {
    const tabla = document.getElementById('tablaCostos');
    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <html>
        <head>
            <title>Costos y Margen de Ganancia</title>
            <style>
                table { width: 100%; border-collapse: collapse; }
                th, td { padding: 8px; text-align: left; border: 1px solid #ccc; }
                th { background-color: #007bff; color: white; }
            </style>
        </head>
        <body>
            <h1>Costos y Margen de Ganancia</h1>
            ${tabla.outerHTML}
        </body>
        </html>
    `);
    ventana.document.close();
    ventana.print();
});
