let x;



function setup(){
createCanvas (500,500);

background("green");
noFill();
x = 10;



}



function draw(){
background(color(0,x,200,x));
ellipse(250,250,x,x/2);


x +=10;
if (x>250){x=0}


}
