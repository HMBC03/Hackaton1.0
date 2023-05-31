// Al clicar en el boton inicializa esta funcion
    function mostrarNombreColor() {
    let nombre = document.getElementById("IngresaNombre").value; // Toma el valor del input
    let colorSeleccionado = tomaColorSeleccionado(); // Funcion para tomar el color
    

    // se validan los campos

    if (nombre === "" || colorSeleccionado === null) {
      alert("Debes ingresar un nombre y seleccionar una opcion de color");
    } else {
        document.getElementById("MostrarNombre").textContent = nombre; // Muestra el nombre 
        document.getElementById("Colorcuadro").style.backgroundColor = colorSeleccionado; // Coloca el color al cuadro
        localStorage.setItem("GuardarNombre",nombre);
        localStorage.setItem("GuardarColor", colorSeleccionado);

        
        /*
      document.getElementById("MostrarNombre").textContent = nombre; // Muestra el nombre 
      document.getElementById("Colorcuadro").style.backgroundColor = colorSeleccionado; // Coloca el color al cuadro
      */
    }
  }
  
  // Funcion para tomar el color
    function tomaColorSeleccionado() {
//   toma todos los elementos radio por el nombre
    let radios = document.getElementsByName("btnRadio"); 
    
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return radios[i].value; // saca de radios el valor del color checked.
      }
    }
    
    return null; // Si no hay nada seleccionado coloca "Nulo-NingunValor"
  }
  

 

  