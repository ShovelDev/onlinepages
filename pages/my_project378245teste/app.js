var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");

var cps = 0;
var cps2 = 0;
var click = 0;
var clicking = false;

function clicked(){
	click++;
	cps++;
	clicking = true;
}

setInterval(function(){ if(cps > 0){ clicksPerSecond(); } }, 1000);

function clicksPerSecond(){
	cps2 = cps;
	cps -= cps;
	console.log("Atualizado.");
}

function verifyClick(){
	if(cps == 0 && cps2 != cps){
		//clicking = false;
		if(click > 0){
			click = click - click;
		}
	}
	
	if(click == 0 && cps == 0){
		clicking = false;
	}
}

function draw(){
	ctx.clearRect(0, 0, cnv.width, cnv.height);
	ctx.font = "30px Arial";
	ctx.fillText(cps2, 50, 50);
	//ctx.fillText(clicking, 50, 100);
	//ctx.fillText(cps, 50, 200);
	//ctx.fillText(click, 50, 300);
}

function update(){
	requestAnimationFrame(update, cnv);
	
	draw();
	verifyClick();
}

update();