  let imagemDaEstrada;
  let imagemVaca;
  let imagemCar;
  let imagemCar2;
  let imagemCar3;
  
 //car

  let xCarro = 700;

 //vaca
 
  let yVaca = 550;
  let xVaca = 100;
  
  function preload(){
    imagemDaEstrada = loadImage("imagens/rua.jpg")
    imagemVaca = loadImage("imagens/vaca.jpg")
    imagemCar = loadImage("imagens/car 1.jpg")
    imagemCar2 = loadImage("imagens/car 2.jpg")
    imagemCar3 = loadImage("imagens/car 3.jpg")
  }

function setup() {
  createCanvas(700, 600);
}

function draw() {
    mostrarEstrada();
    mostraVaca();
    mostraCar();
    mostraCar2();
    mostraCar3();
    carroAcelera();
    movimentaVaca();
}


   function mostraVaca(){
     image(imagemVaca, xVaca, yVaca, 50, 50);
   }

   function mostraCar(){
     image(imagemCar, xCarro, 220, 60, 60)
   }
    
   function mostraCar2(){
    image(imagemCar2, 600, 320, 60, 60)
   }
    
  function mostraCar3(){
    image(imagemCar3, 400, 390, 60, 60)
  }
  
  function mostrarEstrada(){
    background(imagemDaEstrada);
  }
   
  function carroAcelera(){
    xCarro -= 2;
  }
  
  function movimentaVaca(){
    if (keyIsDown(UP_ARROW)){
      yVaca -= 3;
    }
     if (keyIsDown(DOWN_ARROW)){
      yVaca += 3;
    }
      if (keyIsDown(RIGHT_ARROW)){
      xVaca += 3;
    }
     if (keyIsDown(LEFT_ARROW)){
      xVaca -= 3;
    }
  }
  
  
  
