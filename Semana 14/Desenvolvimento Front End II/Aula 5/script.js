// Letra b:
var corpo = document.querySelector('body');
corpo.style.fontFamily = 'Arial, sans-seri'

// Letra c:
document.getElementById('nome').innerHTML = "Rafael Geronimo";
document.getElementById('idade').innerHTML = "26 anos";
document.getElementById('cidade').innerHTML = "Natal/RN";

// Letra d:
var lista = document.querySelectorAll('li');
for(var i = 0; i < lista.length; i++) {
    lista[i].style.color = 'red';
}

// Letra e:
var profilePicture = document.createElement('img');
profilePicture.src = 'perfil.jpg';
document.body.appendChild(profilePicture);
profilePicture.style.height = '200px';
profilePicture.style.borderRadius = '50%';