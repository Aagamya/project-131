img="";
function preload(){
    img=loadImage("dog_cat.jpg")
}


function setup(){
 canvas=createCanvas(700,500)
 canvas.center()
}

function draw(){
    image(img,0,0,700,500)
    fill("red")
    textSize(20)
    text("dog",100,100)
    text("cat",350,100)
    noFill()
    stroke("red")
    rect(80,70,450,400)
    
   
   rect(300,70,350,390)
    

}
