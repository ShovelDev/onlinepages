const elements = document.querySelectorAll('.btn');

const text = document.getElementById('txt').value;



elements.forEach(element => {
 element.addEventListener('click', () => {
  let command = element.dataset["element"];
  if (command == 'createLink' || command == 'insertImage') {
   let url = prompt('Insira a url aqui', 'https://')
   document.execCommand(command, false, url);
  } else {
  document.execCommand(command, false, null);
  }
 });
});