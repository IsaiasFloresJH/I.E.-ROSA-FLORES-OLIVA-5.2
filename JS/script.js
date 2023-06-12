 
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.pageYOffset > 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencia al formulario
  var form = document.getElementById("forma");

  // Agregar un event listener al evento de envío del formulario
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de usuario y contraseña ingresados por el usuario
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    // Verificar si las credenciales son correctas
    if (usuario === "u20100880" && password === "isaiasflores") {
      // Redireccionar a la página "canva.html"
      window.location.href = "../Paginas/canva.html";
    } else {
      // Mostrar un mensaje de error
      alert("Usuario o contraseña incorrectos");
    }
  });
});





