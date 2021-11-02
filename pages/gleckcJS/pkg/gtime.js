const gtimeengine = function(){
	this.gtime = new Date();

	this.update = function(){
		this.gtime = new Date();
	}

	this.get = {
		year: ()=>{
			return this.gtime.getFullYear()
		},
		month: ()=>{
			return this.gtime.getMonth()
		},
		hour: ()=>{
			return this.gtime.getHours()
		},
		minutes: ()=>{
			return this.gtime.getMinutes()
		},
		seconds: ()=>{
			return this.gtime.getSeconds()
		}
	}
}
var GTIME = new gtimeengine()