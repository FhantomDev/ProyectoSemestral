
//Obtener los campos

var email = document.getElementById("email");
var pass = document.getElementById("password");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var direccion = document.getElementById("direccion");
var telefono = document.getElementById("telefono");
var comuna = document.getElementById("comunas");
var provincia = document.getElementById("provincias");
var region = document.getElementById("regiones");

var formRegistro = document.getElementById("form-registro");
var alerta = document.getElementById("alerta");

//Marcar casillas

/* email.addEventListener("blur", function () {
  if (email.value.length < 6) {
    email.style.border = "2px solid red";
  } else {
    email.style.border = "2px solid green";
  }
})

pass.addEventListener("blur", function () {
  if (pass.value.length < 6) {
    pass.style.border = "2px solid red";
  } else {
    pass.style.border = "2px solid green";
  }
})

nombre.addEventListener("blur", function () {
  if (nombre.value.length < 6) {
    nombre.style.border = "2px solid red";
  } else {
    nombre.style.border = "2px solid green";
  }
})

apellidos.addEventListener("blur", function () {
  if (apellidos.value.length < 6) {
    apellidos.style.border = "2px solid red";
  } else {
    apellidos.style.border = "2px solid green";
  }
})

direccion.addEventListener("blur", function () {
  if (direccion.value.length < 6) {
    direccion.style.border = "2px solid red";
  } else {
    direccion.style.border = "2px solid green";
  }
})

telefono.addEventListener("blur", function () {
  if (telefono.value.length < 6) {
    telefono.style.border = "2px solid red";
  } else {
    telefono.style.border = "2px solid green";
  }
})

comuna.addEventListener("blur", function () {
  if (comuna.options[comuna.selectedIndex].text === "Seleccione una opción") {
    comuna.style.border = "2px solid red";
  } else {
    comuna.style.border = "2px solid green";
  }
})

provincia.addEventListener("blur", function () {
  if (provincia.options[provincia.selectedIndex].text === "Seleccione una opción") {
    provincia.style.border = "2px solid red";
  } else {
    provincia.style.border = "2px solid green";
  }
})

region.addEventListener("blur", function () {
  if (region.value < 1) {
    region.style.border = "2px solid red";
  } else {
    region.style.border = "2px solid green";
  }
}) */

//Validar formulario

formRegistro.addEventListener("submit", function (evento) {
  var validarForm = true;

  var validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var validarPass = /^[a-zA-Z0-9]{6,15}$/;
  var validarNombre = /^([a-zA-Z]{2,}\s[a-zA-Z]{2,}|[a-zA-Z]{2,})$/;
  var validarApellidos = /^([a-zA-Z]{2,}\s[a-zA-Z]{2,}|[a-zA-Z]{2,})$/;
  var validarDireccion = /^(?=.*\d)(?=.*\s)[\w\s,.#-]{5,}$/;
  var validarTelefono = /^[1-9]\d{8}$/;

  if (!validarEmail.test(email.value)) {
    validarForm = false;
    email.style.border = "2px solid red";
  } else{
    email.style.border = "2px solid green";
  }
  if (!validarPass.test(pass.value)) {
    validarForm = false;
    pass.style.border = "2px solid red";
  } else{
    pass.style.border = "2px solid green";
  }
  if (!validarNombre.test(nombre.value)) {
    validarForm = false;
    nombre.style.border = "2px solid red";
  } else{
    nombre.style.border = "2px solid green";
  }
  if (!validarApellidos.test(apellidos.value)) {
    validarForm = false;
    apellidos.style.border = "2px solid red";
  } else{
    apellidos.style.border = "2px solid green";
  }
  if (!validarDireccion.test(direccion.value)) {
    validarForm = false;
    direccion.style.border = "2px solid red";
  } else{
    direccion.style.border = "2px solid green";
  }
  if (!validarTelefono.test(telefono.value)) {
    validarForm = false;
    telefono.style.border = "2px solid red";
  } else{
    telefono.style.border = "2px solid green";
  }
  if (comuna.options[comuna.selectedIndex].text === "Seleccione una opción") {
    validarForm = false;
    comuna.style.border = "2px solid red";
  } else{
    comuna.style.border = "2px solid green";
  }
  if (provincia.options[provincia.selectedIndex].text === "Seleccione una opción") {
    validarForm = false;
    provincia.style.border = "2px solid red";
  } else{
    provincia.style.border = "2px solid green";
  }
  if (region.options[region.selectedIndex].text === "Seleccione una opción") {
    validarForm = false;
    region.style.border = "2px solid red";
  } else{
    region.style.border = "2px solid green";
  }

  if (validarForm == false) {
    evento.preventDefault();
    alerta.innerText = "¡Error! Complete correctamente el formulario";
    alerta.style.border = "2px solid red";
    alerta.style.backgroundColor = "lightcoral";
    alerta.style.fontSize = "20px";
    alerta.style.fontWeight = "bold";
    alerta.style.textAlign = "center";
    alerta.style.height = "50px"
    alerta.style.lineHeight = "50px";
    console.log(provincia.value);
    console.log(region.value);

  } else {
    evento.preventDefault();
    alerta.innerText = "Exito " + email.value;
    alerta.style.border = "2px solid green";
    alerta.style.backgroundColor = "lightcoral";
    alerta.style.fontSize = "20px";
    alerta.style.fontWeight = "bold";
    alerta.style.textAlign = "center";
    alerta.style.height = "50px"
    alerta.style.lineHeight = "50px";
  }
})
