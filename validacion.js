//Haz tú validación en javascript acá
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
      
        mostrarMensajeDeError(tipoDeInput, input);
    }
  }
  
  const tipoDeErrores = [
    "valueMissing",
    "patternMismatch",
  ];
  
  const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
      patternMismatch: "El campo nombre debe tener entre 3 a 50 caracteres",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      patternMismatch: "El correo debe contener @ seguido de un dominio y seguido de un punto",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "El campo asunto debe tener entre 3 a 50 caracteres",
       
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
        patternMismatch: "El campo mensaje debe tener entre 3 a 300 caracteres",
    },
  };
  
  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {

      if (input.validity[error]) {
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }
  
  const boton = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});


//boton solo activo si todos los inputs estan llenos
const form = document.querySelector(".formcontato__form");
const todos_inputs = form.querySelectorAll(".formcontato__input");
const button = form.querySelector(".formcontato__botao");

// Agrega un listener de eventos para el evento "input" en todos los inputs
todos_inputs.forEach((input) => {
  input.addEventListener("input", () => {
    // Si todos los inputs están llenos, activa el botón
    if (form.checkValidity()) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});


$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault(); // Prevenir envío automático del formulario
  
      // Obtener los valores de los inputs
      let nombre = $('input[name="nombre"]').val();
      let email = $('input[name="email"]').val();
      let asunto = $('input[name="asunto"]').val();
      let mensaje = $('input[name="mensaje"]').val();
  
      // Crear objeto con la información del usuario
      let usuario = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
      };
  
      // Convertir objeto a formato JSON
      let usuarioJSON = JSON.stringify(usuario);
  
      // Enviar información al servidor usando AJAX
      $.ajax({
        url: "http://localhost:3000", // URL del archivo que guarda la información en base-de-datos.json
        type: 'POST',
        data: {usuario: usuarioJSON},
        success: function(response) {
          alert('Mensaje enviado correctamente');
        },
        error: function(error) {
          alert('Hubo un error al enviar el mensaje');
        }
      });
    });
  });
  