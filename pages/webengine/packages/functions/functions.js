var character = document.getElementByClass("player");

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

function setStyle(w, h, c){
this.w = 0;
this.h = 0;
this.c = 0;
}