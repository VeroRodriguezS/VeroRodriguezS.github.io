window.onload = function () {
  ocultarContenido("parrafo1", "boton1");
  ocultarContenido("parrafo2", "boton2");
  ocultarContenido("parrafo3", "boton3");
};

function ocultarContenido(id, botonId) {
  let parrafo = document.getElementById(id);
  let boton = document.getElementById(botonId);

  if (parrafo.style.display === "" || parrafo.style.display === "block") {
    parrafo.style.display = "none";
    boton.innerHTML = "Ver Más";
  } else {
    parrafo.style.display = "block";
    boton.innerHTML = "Ver Menos";
  }
}
