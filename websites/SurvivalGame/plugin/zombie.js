var life = 100
WB.values.bg("lightgreen")
WB.hideUi()
WB.values.title("Zombie")

var enemy = new WB.createNew("green", Math.random() * WB.worldW-25, Math.random() * WB.worldH-25, 50, 50)
WB.say("Alert!", "Survive")

var lifeup = new WB.createNew("red", Math.random() * WB.worldW-25, Math.random() * WB.worldH-25, 50, 50)

function loopgame(){
	window.requestAnimationFrame(loopgame)
	enemy.add()
	lifeup.add()
	WB.killAll()

	WB.print("Life: " + life,  0, 20, 20, "red")
	WB.print("0 _ 0",  enemy.x+5, enemy.y+20, 15, "black")

	if (enemy.x > player.x) {
		enemy.x -= 3
	}else{
		enemy.x += 3
	}
	if (enemy.y > player.y) {
		enemy.y -= 3
	}else{
		enemy.y += 3
	}

	if (WB.collide(enemy, player)) {
		life--
	}
	if (WB.collide(lifeup, player)) {
		life+= 5
		lifeup.x = Math.random() * WB.worldW
		lifeup.y = Math.random() * WB.worldH
	}

	if (life <= 0) {
		life = 100
		WB.say("Alert!", "Game Over")
		enemy.x = Math.random() * WB.worldW
		enemy.y = Math.random() * WB.worldH
		player.x = WB.worldW/2-25
		player.y = WB.worldH/2-25
	}

}
loopgame()