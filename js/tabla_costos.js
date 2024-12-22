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

// Función para imprimir o descargar la tabla como PDF
document.getElementById('imprimirPDF').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Capturando la tabla
    const tabla = document.getElementById('tablaCostos');

    // Añadiendo título
    doc.text('Costos y Margen de Ganancia', 14, 20);

    // Convertir la tabla a contenido PDF
    doc.autoTable({
        html: tabla,
        startY: 30,
        theme: 'grid',
        headStyles: { fillColor: [0, 123, 255] },
    });

    // Guardar o imprimir
    doc.save('Costos_Margen_Ganancia.pdf');
});
