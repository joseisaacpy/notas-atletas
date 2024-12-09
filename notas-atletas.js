// a FUNÇÃO deve retornar o nome, notas e média

// Variável matriz de objetos com todos os atletas
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];
// função que retorna as características dos atletas
atletas.forEach(function (atleta) {
  console.log(`Nome do Atleta: ${atleta.nome}`);
  console.log(`Notas do Atleta: ${atleta.notas.sort()}`);
  console.log(`Notas Válidas: ${atleta.notas.slice(1, 4)}`);
  let notasValidasSomadas = atleta.notas.slice(1, 4);
  console.log(
    `Média do Atleta:${notasValidasSomadas.reduce(function (total, atual) {
      return (total + atual) / 3;
    }, 0)}`
  );

  console.log("--------------");
});
