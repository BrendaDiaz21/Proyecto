document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table tbody');

    // Habilitar edición en una fila
    const enableEditing = (row) => {
        const cells = row.querySelectorAll('td[contenteditable]');
        cells.forEach(cell => {
            cell.contentEditable = true;
            cell.style.backgroundColor = "#f9f9f9"; // Indicador visual
        });
        row.querySelector('.edit-btn').disabled = true;
        row.querySelector('.save-btn').disabled = false;
    };

    // Guardar los cambios en una fila
    const saveChanges = (row) => {
        const data = [];
        const cells = row.querySelectorAll('td[contenteditable]');
        cells.forEach(cell => {
            data.push(cell.innerText.trim());
            cell.contentEditable = false;
            cell.style.backgroundColor = ""; // Restablecer estilo
        });
        console.log('Datos guardados:', data); // Puedes enviar estos datos al servidor
        alert('Cambios guardados exitosamente.');
        row.querySelector('.edit-btn').disabled = false;
        row.querySelector('.save-btn').disabled = true;
    };

    // Manejar clics en los botones
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
