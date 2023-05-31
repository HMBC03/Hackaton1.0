// Evento que se dispara al cargar el HTML
window.onload = iniciar;
var score=0;
function jugar(){
var pantalla= document.querySelector("canvas");
var pincel= pantalla.getContext("2d");
var div = document.querySelector(".div");
var imagen = div.getElementsByTagName("img")[0];
var startgame=document.getElementById("startgame");

var x=0;

   

 //dibujamos imagen del programa 
function disennar(x){
  pincel.drawImage(imagen, x, 0, 200, 100);
  
}
//limpiamos media pantalla del canvas
function limpiar(){
    pincel.clearRect(0,0,1500,200);
}

//actualizamos el screen de canvas limpiando e imprimiendo el nuevo frame
function updatescreen(){
   limpiar();
   disennar(x);
  x++;
}

//capturamos los valores de las flechas para dar movimiento al objeto
    //posicion inicial del jugador
    var horizontal = 10;
    var vertical = 300;

    function dibujar() {
      pincel.clearRect(0, 0, 100 && 1500,200 && 500);
      //pincel.drawImage(imagenuser,horizontal-10,vertical-10,300,300);
     // pincel.fillRect(horizontal - 10, vertical - 10, 200, 20);
      pincel.drawImage(imagen, horizontal-10, vertical-10, 200, 100);
      
      if(horizontal==900 && x<900){
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Ha ganado',
          showConfirmButton: false,
          timer: 1500
        })
          score+=100;
          document.getElementById("score").innerHTML = score; 
          startgame.style.display="block";
          
          
      }else if(horizontal<900 && x>900){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Intenta nuevamente',
          
        })
        startgame.style.display="block";
        horizontal = 10;
        vertical = 300;
        x=0;
        
      }
      
    }

    function moverimguser(event) {
      var tecla = event.key;
        switch (tecla) {
            case "ArrowLeft":
                    horizontal -= 10;
                    break
            case "ArrowRight":
                    horizontal += 10;
                    break        
        }
      
      dibujar();
      
    }
    dibujar();
    setInterval(updatescreen, 5);
  



  

startgame.style.display="none";
//aqui capturamos con key para poder manipular el objeto
document.addEventListener("keydown", moverimguser);
//añadimos un evento para desahabilitar el scroll con el teclado mejorando la experiencia de usuario
window.addEventListener('keydown', function(e) {
    // Aqui vericamos que las flechas de juego no empiecen a mover hacer scroll
    if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(e.key)) {
      e.preventDefault(); // Evitar la acción predeterminada del scroll
    }
  });
}
 

// Función que se ejecuta al cargar el HTML
function iniciar() {
    
    // Puedes agregar aquí el código que deseas que se ejecute al cargar el HTML

    // Obtener la variable de tipo string del local storage
let nombreGuardado = localStorage.getItem("GuardarNombre");
// Obtener el color de fondo del local storage
let colorGuardado = localStorage.getItem("GuardarColor");
document.getElementById("MostrarNombre").textContent = nombreGuardado; // Muestra el nombre 
document.getElementById("Colorcuadro").style.backgroundColor = colorGuardado; // Coloca el color al cuadro

}












