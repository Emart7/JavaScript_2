var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var paciente = capturarDatosPaciente(form);

    console.log(paciente);

    var tabla = document.querySelector("#tabla-pacientes");

    //Creando los tds
    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    //Asignando los valores a la propiedad textContent
    nombreTd.textContent = paciente.nombre;
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //Asignacion al tr de los td, y la tabla del tr
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);

});

function capturarDatosPaciente(form) {
    //Capturando los datos del formulario
    var paciente = {
     nombre: form.nombre.value,
     peso: form.peso.value,
     altura: form.altura.value,
     gordura: form.gordura.value,
     imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}
