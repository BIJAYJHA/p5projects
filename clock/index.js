function setup(){
	createCanvas(800,800);
	angleMode(DEGREES);
	

}

let x=[0,0,0];

function draw(){
	background(0);
	stroke(255);
	console.log('fdsfsdf');

	let hr= hour();
	let min= minute();
	let sec=second();

	
	// strokeWeight(8);
	// stroke(255);
	//  noFill();
	// ellipse(400,400,300,300);
	//rotate(-90);
	translate(400,400);
	rotate(-90);

	strokeWeight(4);
	stroke(255,100,150);
	noFill();
	end1= map(sec,0,60,0,360);
	push()
	rotate(x[0]++*3);
	arc(0,0,300,300,0,end1);
	pop()

	

    push()
    stroke(255,100,150);
    rotate(end1);
    line(0,0,90,0);
     pop()

    
    strokeWeight(4);
	stroke(120,150,255);
	end2= map(min,0,60,0,360);
	push()
	rotate(-x[1]++*2);
    arc(0,0,280,280,0,end2);
	pop()
	

	  push()
    stroke(120,150,255);
    rotate(end2);
    line(0,0,70,0);
     pop()


	strokeWeight(4);
	stroke(120,255,160);
	end3= map(hr%12,0,12,0,360);
	push()
	rotate(x[2]++);
	arc(0,0,260,260,0,end3);
	pop()

	  push()
    stroke(120,255,160);
    rotate(end3);
    line(0,0,40,0);
     pop()


     stroke(255);
     point(0,0);




	
}