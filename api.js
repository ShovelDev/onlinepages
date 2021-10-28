const apisetup = function(){
	this.date = new Date();
	this.time = {
		update: ()=>{
			this.date = new Date();
		},
		getMonth: ()=>{
			return this.date.getMonth()
		},
		getDate: ()=>{
			return this.date.getDate()
		},
		getHours: ()=>{
			return this.date.getHours()
		},
		getMinutes: ()=>{
			return this.date.getMinutes()
		},
		getSeconds: ()=>{
			return this.date.getSeconds()
		}
	}
	this.emulator = {
		setup: (iframe, src)=>{
			var apigame = document.querySelector(iframe)
			apigame.src = src
			apigame.style.border = "none"
			apigame.style.width = "500px"
			apigame.style.height = "500px"
			apigame.style.display = "block"
			apigame.style.marginLeft = "auto"
			apigame.style.marginRight = "auto"
			apigame.style.borderRadius = "10px"
		}
	}
}