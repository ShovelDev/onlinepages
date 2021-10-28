function sav(filename, text) {
  let src = document.getElementById('edit').textContent;
  var element = document.createElement('a');
  filename = "game.html"
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(src));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
sav(filename,src);

function r(){
var iframe = document.getElementById("preview"); iframe.src = "game/game.html";
}