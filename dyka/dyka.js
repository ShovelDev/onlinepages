/*
	DykaEngine 1.2
	12/11/2021

	Visite dykaengine.weebly.com para saber mais.
*/

var game;
var ctx;

GlobaMouse = {
	x: undefined,
	y: undefined,
	click: false,
	width: 0.1,
	height: 0.1,
	btn: 0
}

function initDyka(){
	game = document.createElement("canvas")
	document.body.appendChild(game)
	game.style.background = "black"
	document.body.style.margin = 0
	document.body.style.padding = 0
	document.body.style.overflow = "hidden"
	game.width = innerWidth
	game.height = innerHeight
	ctx = game.getContext("2d")
	document.addEventListener('contextmenu', event => event.preventDefault());
	console.log('%cMade in DykaEngine 1.2 ', 'color:#73ffa6;text-align: center;border:1px solid #73ffa6;background-color: #0e1111;padding: 5px 9px;border-radius: 5px;');
}

const enginecode = function(){

	// LOOP
	this.update = function(update){
		requestAnimationFrame(update)
		ctx.clearRect(0, 0, innerWidth, innerHeight)
	}

	// MOUSE
	this.mouse = {
		x: 0,
		y: 0,
		click: false,
		areaX: 0.1,
		areaY: 0.1,
		btn: 0
	}

	// AUDIO
	this.sound = function(path, loop=false, volume=1){
		this.path = path
		this.loop = loop
		this.volume = volume

		this.audio = new Audio(this.path);
		this.audio.src = this.path;
		this.audio.loop = this.loop;
		this.audio.volume = this.volume;

		this.play = function(){
			this.audio.play();
		}
		this.pause = function(){
			this.audio.pause();
		}
	}

	// SCENE
	this.scene = {
		background: (color="black")=>{
			game.style.background = color
		},
	}

	// TOOLS
	this.tools = {

	}

	// MEMORY
	this.memory = {
		define: (name, value)=>{
			localStorage.setItem(name, value)
		},
		locate: (name)=>{
			return localStorage.getItem(name)
		},
		remove: (name)=>{
			localStorage.removeItem(name)
		}
	}

	// DRAW - TOOLS
	this.print = function(text, x, y, size, color, font="Arial"){
		ctx.save()
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.font = size + "px " + font;
		ctx.fillText(text, x, y);
		ctx.restore()
	}

	this.camera = function(){
		this.x = game.width/2
		this.y = game.height/2
	}

	// OBJECTS
	this.obj = function(x, y, width, height, color="red", rotation=0){
		this.x = x
		this.y = y
		this.height = height
		this.width = width
		this.color = color
		this.middleX = this.x+this.width/2
		this.middleY = this.y+this.height/2
		this.rotation = rotation
		this.self = this

		this.add = function(){
			ctx.save()
			ctx.beginPath()
			this.middleX = this.x+this.width/2
			this.middleY = this.y+this.height/2
			ctx.translate(this.middleX,this.middleY);
			ctx.rotate(this.rotation * Math.PI / 180);
			ctx.translate(-this.middleX, -this.middleY);
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
			ctx.restore()
		}

		this.followCamera = function(camera){
			this.x = camera.x
			this.y = camera.y
		}

		this.colliding = function(obj2){
		  	if (this.x < obj2.x + obj2.width &&
			   this.x + this.width > obj2.x &&
			   this.y < obj2.y + obj2.height &&
			   this.y + this.height > obj2.y) {
			   	return true
			}
		}

		this.hover = function(){
			if (this.x < GlobaMouse.x + GlobaMouse.width &&
			   this.x + this.width > GlobaMouse.x &&
			   this.y < GlobaMouse.y + GlobaMouse.height &&
			   this.y + this.height > GlobaMouse.y) {
			   	return true
			}
		}

		this.click = function(){
			if (this.x < GlobaMouse.x + GlobaMouse.width &&
			   this.x + this.width > GlobaMouse.x &&
			   this.y < GlobaMouse.y + GlobaMouse.height &&
			   this.y + this.height > GlobaMouse.y) {
			   	if (GlobaMouse.click) {
			   		return true
			   	}
			}
		}
	}
}

const Dyka = new enginecode()
addEventListener('resize', (event) => {
	game.width = innerWidth;
	game.height = innerHeight;
})
addEventListener('mousemove', (e) => {
	Dyka.mouse.x = e.clientX;
	Dyka.mouse.y = e.clientY;
	GlobaMouse.x = e.clientX;
	GlobaMouse.y = e.clientY;
})
document.addEventListener('mouseleave', (e) => {
	Dyka.mouse.x = undefined;
	Dyka.mouse.y = undefined;
	GlobaMouse.x = undefined;
	GlobaMouse.y = undefined;
})
addEventListener('mousedown', (e) => {
	Dyka.mouse.btn = e.button
	GlobaMouse.btn = e.button
	Dyka.mouse.click = true
	GlobaMouse.click = true
})
addEventListener('mouseup', (e) => {
	Dyka.mouse.click = false
	GlobaMouse.click = false
})
