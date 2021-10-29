const worldbuilderapi = function(){
	this.say = function(user, msg){
		alert(user + " Say: " + msg)
	}

	this.spawnCustom = function(file, x, y, width=blockSize, height=blockSize){
		sprites.push(new sprite(file,x-width/2, y-height/2, width, height))
	}

	this.summon = function(mob, x=guy.x, y=guy.y){
		if (mob == "zombie") {
			mobs.push(new sprite("img/zombie.png", x-blockSize/2, y-blockSize/2, blockSize*2, blockSize*2))
		}else{
			alert("Mob {" + mob + "} not found")
		}
	}

	this.hideUi = function(){
		uiColor = "transparent"
	}

	this.killAll = function(){
		sprites.splice(0,sprites.length)
		mobs.splice(0,mobs.length)
	}

	this.killMobs = function(){
		mobs.splice(0,mobs.length)
	}

	this.killBlock = function(){
		sprites.splice(0,sprites.length)
	}

	this.collide = function(obj1, obj2){
		if (obj1.x < obj2.x + obj2.width &&
		   obj1.x + obj1.width > obj2.x &&
		   obj1.y < obj2.y + obj2.height &&
		   obj1.y + obj1.height > obj2.y) {
		   	return true
		}
	}

	this.createNew = function(color, x, y, width, height){
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.color = color
		this.add = function(){
			ctx.save()
			ctx.beginPath()
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
			ctx.restore()
		}
	}

	this.drawCircle = function(color, x, y, size){
		ctx.save()
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.arc(x, y, size, 0, Math.PI *2);
		ctx.fillStyle = color;
		ctx.stroke();
		ctx.fill();
		ctx.restore()
	}

	this.print = function(text, x, y, size, color){
		ctx.save()
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.font = size + "px monospace";
		ctx.fillText(text, x, y);
		ctx.restore()
	}

	this.worldW = innerWidth
	this.worldH = innerHeight

	this.values = {
		title: (string)=>{
			if (string != null) {
				document.title = string
			}else{
				return document.title
			}
		},
		bg: (value)=>{
			if (value != null) {
				worldColor = value
				Rules.background(worldColor)
			}else{
				return document.title
			}
		}
	}
}
var WB = new worldbuilderapi()