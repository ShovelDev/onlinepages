var canvas = document.createElement("canvas")
var ctx = canvas.getContext("2d")
document.body.appendChild(canvas)

const gcanvaengine = function(){
	this.setup = function(){
		canvas.width = innerWidth;
		canvas.height = innerHeight;
		canvas.style.background = "white"
		document.body.style.background = "black"
	}

	this.tools = {
		color: (color)=>{
			ctx.fillStyle = color;
			ctx.strokeStyle = color;
		},
		clear: (x, y, width, height)=>{
			ctx.clearRect(x, y, width, height);
		},
		pencilDown: ()=>{
			ctx.beginPath();
		},
		movePencil: (x, y)=>{
			ctx.moveTo(x, y);
		},
		pencilTo: (x, y)=>{
			ctx.lineTo(x,y);
		},
		pencilSize: (size)=>{
			ctx.lineWidth = size
		},
		fill: ()=>{
			ctx.fill();
		},
		sk: ()=>{
			ctx.stroke()
		},
		alpha: (alpha)=>{
			ctx.globalAlpha = alpha;
		}
	}

	this.draw = {
		rect: (x, y, width, height)=>{
			ctx.fillRect (x, y, width, height);
		},
		skRect: (x, y, width, height)=>{
			ctx.strokeRect(x, y, width, height);
		},
		arc: (x, y, size)=>{
			ctx.arc(x, y, size, 0, Math.PI, false);
		},
		circle: (x, y, size)=>{
			ctx.arc(x, y, size, 0, Math.PI * 2, true);
		}
	}
}
var GCANVA = new gcanvaengine()