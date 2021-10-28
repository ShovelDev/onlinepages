var contaBtn = document.getElementById('conta')
var closeBtn = document.getElementById('close')

contaBtn.addEventListener("click", (e)=>{
	document.getElementById('view').style.display = "block"
})

closeBtn.addEventListener("click", (e)=>{
	document.getElementById('view').style.display = "none"
})