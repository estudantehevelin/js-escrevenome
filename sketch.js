function setup() {
    // cria uma tela de 400px de largura por 400px de altura
    createCanvas(600,600)
     background("white");
    
  }
  
  function draw() {
   
    stroke("blue");
    fill("red");
    // console.log(mouseIsPressed);
    if(mouseIsPressed) {
    
    rect(mouseX,mouseY,20,35);
    }
  }