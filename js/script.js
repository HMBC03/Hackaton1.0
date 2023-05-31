var pantalla= document.querySelector("canvas");
var pincel= pantalla.getContext("2d");
var div = document.querySelector(".div");
var imagen = div.getElementsByTagName("img")[0];
var imagenuser = new Image();
    imagenuser.src="img/carro.svg";
    pincel.fillStyle="black"; //propiedad
    pincel.fill();

  
function disennar(x){
  pincel.drawImage(imagen, x, 0, 200, 100);

  pincel.fillRect(x,0,20,20);//guia
}



function limpiar(){
    pincel.clearRect(0,0,1500,200);
}
var x=0;

//actualizamos el screen de canvas
function updatescreen(){
   limpiar();
    disennar(x);
    x++;
}

//capturamos los valores de las flechas para dar movimiento a el objeto

    var horizontal = 10;
    var vertical = 300;

    function dibujar() {
      pincel.clearRect(0, 0, 100 && 1500,200 && 500);
      //pincel.drawImage(imagenuser,horizontal-10,vertical-10,300,300);
     // pincel.fillRect(horizontal - 10, vertical - 10, 200, 20);
      pincel.drawImage(imagen, horizontal-10, vertical-10, 200, 100);
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
           
            default:
                break;
        }
      

      dibujar();
    }

    
    


  






dibujar();
setInterval(updatescreen, 3);


//aqui capturamos con key para poder manipular el objeto
document.addEventListener("keydown", moverimguser);

window.addEventListener('keydown', function(e) {
    // Aqui vericamos que las flechas de juego no empiecen a mover hacer scroll
    if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(e.key)) {
      e.preventDefault(); // Evitar la acción predeterminada del scroll
    }
  });