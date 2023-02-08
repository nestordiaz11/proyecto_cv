
document.getElementById("boton_datos").addEventListener("click", mostrar_datos);

function mostrar_datos() {
    document.getElementById("datos1").innerHTML = `Email: anthonyadams@example.com   &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp     &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp Teléfono: (766) 356-9721  <br>
    <br>
    Dirección: 1182 Mcclellan Rd., Michigan, E.E.U.U      &nbsp &nbsp &nbsp  &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Fecha de Nacimiento: 08/01/1973`
    document.getElementById("boton_datos").innerHTML = "OCULTAR DATOS PERSONALES";
    document.getElementById("boton_datos").addEventListener("click", ocultar_datos);
    function ocultar_datos() { location.reload() };


};




document.getElementById("boton_enviar").addEventListener("click", ver_consola);

function ver_consola() {
    window.alert("Los datos estan siendo enviados a la consola");
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    console.log(`El usuario se llama ${nombre} ${apellido} y  su email es: ${email}`)
};
