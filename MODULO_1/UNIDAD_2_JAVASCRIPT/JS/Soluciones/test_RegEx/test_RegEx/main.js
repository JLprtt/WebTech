document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const telefono = document.querySelector('#telefono');
    const fechaNacimiento = document.querySelector('#fechaNacimiento');
    const comentarios = document.querySelector('#comentarios');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^\d{9}$/;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nombreValue = nombre.value.trim();
        const emailValue = email.value.trim();
        const telefonoValue = telefono.value.trim();
        const fechaNacimientoValue = fechaNacimiento.value.trim();
        const comentariosValue = comentarios.value.trim();
        const fechaActual = new Date();
        const fechaNacimientoDate = new Date(fechaNacimientoValue);
        let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
        const mes = fechaActual.getMonth() - fechaNacimientoDate.getMonth();
        if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimientoDate.getDate())) {
            edad--;
        }
       
        if (emailRegex.test(emailValue) && telefonoRegex.test(telefonoValue)) {
            const imprimeDatos = document.querySelector('#imprimeDatos');
            imprimeDatos.innerHTML = `
            <h2>datos del formulario</h2>
            <p><strong>Nombre: ${nombreValue}</strong>
            <p><strong>Email: ${emailValue}</strong>
            <p><strong>Teléfono: ${telefonoValue} </strong>
            <p><strong>Edad: ${edadValue} </strong>
            <p><strong>Fecha de nacimiento: ${fechaNacimientoValue}</strong>
            <p><strong>Comentarios: ${comentariosValue}</strong>
        `;
        }
        const edadMinima = 18;
        if (edad < edadMinima) {
            alert('Debes tener al menos 18 años para enviar el formulario.');
 
        }
        else {
            alert('Por favor, verifica que el correo electrónico y el número de teléfono sean válidos.');
        }
    })
})