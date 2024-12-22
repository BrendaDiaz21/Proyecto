document.addEventListener('DOMContentLoaded', () => {
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    const table = document.querySelector('table tbody');
    
    // Habilitar edición
    editBtn.addEventListener('click', () => {
        const cells = table.querySelectorAll('td');
        cells.forEach(cell => {
            cell.contentEditable = true;
            cell.style.backgroundColor = "#f9f9f9"; // Visual para indicar edición
        });
        editBtn.disabled = true;
        saveBtn.disabled = false;
    });

    // Guardar cambios
    saveBtn.addEventListener('click', () => {
        const cells = table.querySelectorAll('td');
        const data = [];
        
        // Deshabilitar edición y recopilar datos
        cells.forEach((cell, index) => {
            cell.contentEditable = false;
            cell.style.backgroundColor = "";
            const rowIndex = Math.floor(index / 4); // Dividir en grupos de 4 columnas
            if (!data[rowIndex]) data[rowIndex] = [];
            data[rowIndex].push(cell.innerText);
        });
        
        console.log('Datos guardados:', data); // Mostrar datos en consola
        alert('Cambios guardados exitosamente.');
        
        editBtn.disabled = false;
        saveBtn.disabled = true;
    });
});
