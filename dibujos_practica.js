var d = document.getElementById("canvas1"); // se obtiene el elemento mediante el ID
var lienzo = d.getContext("2d");//indicamos que a travez de la variable que almacena el canvas obtenemos el contexto 2D

dibujarLinea("pink", 100, 100, 100, 20);
dibujarLinea("blue", 100,20,20,100);
dibujarLinea("red", 20,100,100,100);

// Segundo Canvas

var a = document.getElementById("canvas2")
var lienzo = a.getContext("2d")

dibujarLinea("red", 100,0,70,70);
dibujarLinea("red", 70,70, 0,100);
dibujarLinea("red", 0,100,70,130);
dibujarLinea("red", 70,130,100,200);
dibujarLinea("red", 100,200,130,130);
dibujarLinea("red", 130,130,200,100);
dibujarLinea("red",200,100,130,70);
dibujarLinea("red", 130,70,100,0); 

// Tercer canvas

var b = document.getElementById("canvas3");
var lienzo = b.getContext("2d");

dibujarLinea("gray", 100,0,0,100);
dibujarLinea("gray", 0,100,100,200);
dibujarLinea("gray", 100,200,200,100);
dibujarLinea("gray", 200,100,100,0);
dibujarLinea("gray", 150,50,50,150);
dibujarLinea("gray", 50,50,150,150);
dibujarLinea("gray", 100,0,100,200);

// cuarto canvas
var c = document.getElementById("canvas4");
var lienzo = c.getContext("2d"); 
dibujarLinea("yellow", 100,0,0,40);
dibujarLinea("yellow", 100,0,40,110);
dibujarLinea("yellow", 0,40,40,110);
dibujarLinea("red", 40,110,110,70);
dibujarLinea("red", 40,110,80,170);
dibujarLinea("red", 80,170,110,70);
dibujarLinea("green", 80,170,160,120);
dibujarLinea("green", 160,120,110,70);
dibujarLinea("orange", 110,70,100,0);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();//indica inicio de trazado
	lienzo.strokeStyle = color; //color del trazado
	lienzo.moveTo(xinicial, yinicial);// punto de partida del trazado dento del canvas
	lienzo.lineTo(xfinal, yfinal);// punto hasta donde ira el primer trazado
	lienzo.stroke(); //Se indica la materializacion del trazo
	lienzo.closePath(); //Se levanta el lapiz o se finaliza en trazo
}