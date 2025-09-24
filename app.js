// app.js
let listaAmigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos
    listaAmigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaVisual();
}

function actualizarListaVisual() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigosElement.innerHTML = '';
    
    // Si no hay amigos, mostrar mensaje
    if (listaAmigos.length === 0) {
        listaAmigosElement.innerHTML = '<li>No hay amigos en la lista</li>';
        return;
    }
    
    // Crear elementos de lista para cada amigo
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>¡El amigo secreto es: ${amigoSorteado}!</li>`;
}

// Event listener para tecla Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Inicializar la lista visual
    actualizarListaVisual();
});