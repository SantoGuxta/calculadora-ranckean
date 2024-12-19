// Função para calcular o saldo e determinar o nível do jogador
function calcularRankeadas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determinar o nível do jogador
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Mensagem final
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Exemplo de uso
const vitorias = 85;  // Exemplo: número de vitórias
const derrotas = 30;  // Exemplo: número de derrotas

calcularRankeadas(vitorias, derrotas);
