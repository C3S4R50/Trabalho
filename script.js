let seconds = 0;

// Função para atualizar o contador a cada segundo
function updateTimer() {
    seconds++;
    document.getElementById('timer').textContent = `${seconds} segundos`;
}
// Chama a função updateTimer a cada 1000 milissegundos (1 segundo)
setInterval(updateTimer, 1000);