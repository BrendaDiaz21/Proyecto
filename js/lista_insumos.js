document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table tbody');

    // Función para habilitar edición en una fila
    const enableEditing = (row) => {
        const cells = row.querySelectorAll('td[contenteditable]');
        cells.forEach(cell => {
            cell.contentEditable = true;
            cell.style.backgroundColor = "#f9f9f9"; // Indicador visual de edición
        });
        row.querySelector('.edit-btn').disabled = true;
        row.querySelector('.save-btn').disabled = false;
    };

    // Función para deshabilitar edición en una fila
    const disableEditing = (row) => {
        const cells = row.querySelectorAll('td[contenteditable]');
        cells.forEach(cell => {
            cell.contentEditable = false;
            cell.style.backgroundColor = ""; // Restablecer el estilo original
        });
        row.querySelector('.edit-btn').disabled = false;
        row.querySelector('.save-btn').disabled = true;
    };

    // Función para guardar cambios en una fila
    const saveChanges = (row) => {
        const data = [];
        const cells = row.querySelectorAll('td[contenteditable]');
        cells.forEach(cell => {
            data.push(cell.innerText.trim());
        });
        console.log('Datos guardados:', data); // Puedes enviar estos datos al servidor
        alert('Cambios guardados con éxito.');
        disableEditing(row);
    };

    // Manejar clics en botones de la tabla
    table.addEventListener('click', (event) => {
        const target = event.target;
        const row = target.closest('tr');

        if (target.classList.contains('edit-btn')) {
            enableEditing(row);
        }

        if (target.classList.contains('save-btn')) {
            saveChanges(row);
        }
    });
});
