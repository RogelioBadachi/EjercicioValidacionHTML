const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
})

function validarNacimiento (input) {
    const fechaCliente = new Date(input.value);
    mayorDeEdad(fechaCliente);
}

function mayorDeEdad (fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    console.log(diferenciaFechas <= fechaActual);
}