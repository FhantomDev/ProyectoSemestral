
var email = document.getElementById("email");
var pass = document.getElementById("password");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var direccion = document.getElementById("direccion");
var telefono = document.getElementById("telefono");
var ciudad = document.getElementById("ciudad");
var region = document.getElementById("regiones");

var formRegistro = document.getElementById("form-registro");
var alerta = document.getElementById("alerta");

email.addEventListener("blur", function () {
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

ciudad.addEventListener("blur", function () {
  if (ciudad.value.length < 6) {
    ciudad.style.border = "2px solid red";
  } else {
    ciudad.style.border = "2px solid green";
  }
})

region.addEventListener("blur", function () {
  if (region.value == "Elegir...") {
    region.style.border = "2px solid red";
  } else {
    region.style.border = "2px solid green";
  }
})

formRegistro.addEventListener("submit", function (evento) {
  var validarForm = true;

  var validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var validarPass = /^[a-zA-Z0-9]{6,15}$/;
  var validarNombre = /^([a-zA-Z]{2,}\s[a-zA-Z]{2,}|[a-zA-Z]{2,})$/;
  var validarApellidos = /^([a-zA-Z]{2,}\s[a-zA-Z]{2,}|[a-zA-Z]{2,})$/;
  var validarDireccion = /^(?=.*\d)(?=.*\s)[\w\s,.#-]{5,}$/;
  var validarTelefono = /^[1-9]\d{8}$/;

  console.log(email.value);

  if (!validarEmail.test(email.value)) {
    validarForm = false;
  }
  if (!validarPass.test(pass.value)) {
    validarForm = false;
  }
  if (!validarNombre.test(nombre.value)) {
    validarForm = false;
  }
  if (!validarApellidos.test(apellidos.value)) {
    validarForm = false;
  }
  if (!validarDireccion.test(direccion.value)) {
    validarForm = false;
  }
  if (!validarTelefono.test(telefono.value)) {
    validarForm = false;
  }
  if (ciudad.value.length < 6) {
    validarForm = false;
  }
  if (region.value == "Elegir...") {
    validarForm = false;
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
