let listaAmigos = [];

// Función para asignar texto a un elemento
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para limpiar el campo de entrada
function limpiar() {
    document.getElementById('amigo').value = '';
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    document.getElementById('listaAmigos').innerHTML =
        listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}

// Función para agregar un amigo
function agregarAmigo() {
    let amigoUsuario = document.getElementById('amigo').value.trim();

    if (amigoUsuario === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    if (listaAmigos.includes(amigoUsuario)) {
        alert('El amigo ya está agregado');
        limpiar();
        return;
    }
    listaAmigos.push(amigoUsuario);
    actualizarLista();
    limpiar();
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    listaAmigos.splice(indiceAleatorio, 1);
    actualizarLista();

    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}
