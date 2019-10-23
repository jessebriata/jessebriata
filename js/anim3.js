let x;



function setup(){
createCanvas (500,500);

background("green");
noFill();
x = 10;



}



function draw(){
background(color(200,20,200,20));
rect(Math.sin(x)*500,250,100,100*x/250);


x +=1;
if (x>250){x=0}


}
