/***
#
# DESAFIO CLASSIFICADOR DE NÍVEL DE HERÓI
# Utilizando:
#   - Variáveis
#   - Operadores
#   - Estruturas de decisões
#   - Laços de repetição
#
# Criado por Rafael
# 2024-06-19
#
***/

function classificadorDeHeroi(nomeDoHeroi, xpDoHeroi) {
    let nivel;

    if (xpDoHeroi < 1000) {
        nivel = "Ferro";
    } else if (xpDoHeroi < 2000) {
        nivel = "Bronze";
    } else if (xpDoHeroi < 5000) {
        nivel = "Prata";
    } else if (xpDoHeroi < 7000) {
        nivel = "Ouro";
    } else if (xpDoHeroi < 8000) {
        nivel = "Platina";
    } else if (xpDoHeroi < 9000) {
        nivel = "Ascendente";
    } else if (xpDoHeroi < 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`\nO Herói de nome ${nomeDoHeroi} está no nível de ${nivel}\n`);
}


// CASOS DE USO DO CLASSIFICADOR
const listaDeHerois = [
    { nome: "Luke", xp: 398 },
    { nome: "R2D2", xp: 9973 },
    { nome: "Darth Maul", xp: 2364 },
    { nome: "Ahsoka", xp: 1264 },
    { nome: "Obi-Wan", xp: 4420 },
    { nome: "Chewbacca", xp: 6059 },
    { nome: "Leia", xp: 7311 },
    { nome: "C3PO", xp: 12749 },
    { nome: "Han", xp: 8911 }
];

listaDeHerois.forEach(heroi => {
    classificadorDeHeroi(heroi.nome, heroi.xp);
});