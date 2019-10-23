let x;



function setup(){
createCanvas (500,500);

background("white");

x = 0;



}



function draw(){

ellipse(mouseX,x,x,x)
x++;
if(x>250){x=0};
}
