$(document).ready(function () {
  $.ajax({
    url: "https://apis.digital.gob.cl/dpa/regiones",
    type: "GET",
    crossDomain: true,
    dataType: "jsonp",
    success: function (data) {
      $.each(data, function (i, item) {
        $("#regiones").append(
          "<option value='" + item.codigo + "'>" + item.nombre + "</option>"
        );
      });
    },
    error: function (xhr, status, error) {
      console.log("Error al obtener las regiones: " + error);
    },
  });
})

$("#regiones").change(function () {
  //Tomamos el valor del item seleccionado en el select de region
  var idRegion = $("#regiones").val();
  //QUitamos el atributo de deshabilitado del select de provincias
  $("#provincias").attr("disabled", false);
  //Vaciamos las opciones de provincias(Para evitar una sobrecarga de los mismos campos)
  $("#provincias").empty();
  //Al quedar vacio quedaria en blanco ,m para evitar esto insertamos un registro base de tipo disable hidden que diga seleccione una opcion
  $("#provincias").append("<option hidden disable>Seleccione una opción</option>");
  //Mismo proceso para comunas y asi evitar la sobrecarga de campos y el correcto funcionamiento de los campos
  $("#comunas").empty();
  $("#comunas").append("<option hidden disable>Seleccione una opción</option>");

  //Mismo proceso que con las regiones solo que en este caso insertaremos el ID obtenido de regiones en el URL de la api de regiones
  //URL Original: https://apis.digital.gob.cl/dpa/regiones/{codigo}/provincias
  $.ajax({
    url: "https://apis.digital.gob.cl/dpa/regiones/" + idRegion + "/provincias",
    type: "GET",
    crossDomain: true,
    dataType: "jsonp",
    success: function (data) {
      $.each(data, function (i, item) {
        $("#provincias").append(
          "<option value='" + item.codigo + "'>" + item.nombre + "</option>"
        );
      });
    },
    error: function (xhr, status, error) {
      console.log("Error al obtener las regiones: " + error);
    },
  });

  $("#provincias").change(function () {
    var idRegion = $("#regiones").val();
    var idProvincia = $("#provincias").val();
    $("#comunas").attr("disabled", false);
    $("#comunas").empty();
    $("#comunas").append("<option hidden disable>Seleccione una opción</option>");
    //URL original https://apis.digital.gob.cl/dpa/regiones/{codigo}/provincias/{codigo}/comunas
    $.ajax({
      url: "https://apis.digital.gob.cl/dpa/regiones/" + idRegion + "/provincias/" + idProvincia + "/comunas",
      type: "GET",
      crossDomain: true,
      dataType: "jsonp",
      success: function (data) {
        $.each(data, function (i, item) {
          $("#comunas").append(
            "<option value='" + item.codigo + "'>" + item.nombre + "</option>"
          );
        });
      },
      error: function (xhr, status, error) {
        console.log("Error al obtener las regiones: " + error);
      },
    });
  });
});

