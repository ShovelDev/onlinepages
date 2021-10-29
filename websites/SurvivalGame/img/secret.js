function secret(){
	var cheatmode = prompt("Cheat mode = ")
	if (cheatmode == "true") {
		alert("Cheat Mode ON")
		debug = true
	}
	if (cheatmode == "false") {
		alert("Cheat Mode OFF")
		debug = false
	}
}

function cheat(){
	if (debug) {
		var ct = prompt("COMMAND")
		if (ct == "/speed") {
			speed = prompt("Speed")
		}
		if (ct == "/setdevice") {
			mobile = prompt("true/false")
		}
	}else{
		console.error("ERROR :(")
	}
}