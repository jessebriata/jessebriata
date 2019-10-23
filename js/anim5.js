let x;



function setup(){
createCanvas (500,500);

background(color(200,300,200,x));
noFill();
x = 10;



}



function draw(){
background(color(200,300,200,x));
ellipse(mouseX,mouseY,x,x/5);



x +=10;
if (x>250){x=0}


}
