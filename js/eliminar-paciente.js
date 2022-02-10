var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("click", function(event){
    event.target.parentNode.remove();

});
// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Realizaron 2 click");
//         this.remove();
//     });

// });