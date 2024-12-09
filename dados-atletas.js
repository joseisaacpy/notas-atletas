//  criar uma classe Atleta para concentrar os atributos e métodos dos atletas
class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
  calculaCategoria() {}

  calculaIMC() {
    let imcCalculado = this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    let notasOrdenadas = this.notas.sort();
    let notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
    let soma = notasValidas.reduce(function (total, atual) {
      return total + atual;
    }, 0);
    return soma / notasValidas.length;
  }

  obtemNomeAtleta() {
    return `Nome: ${this.nome}`;
  }

  obtemIdadeAtleta() {
    return `Idade: ${this.idade}`;
  }

  obtemPesoAtleta() {
    return `Peso: ${this.peso}`;
  }

  obtemNotasAtletas() {
    return `Notas: ${this.notas}`;
  }

  obtemCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Demais idades";
    }
  }

  obtemIMC() {
    return `IMC: ${this.calculaIMC()}`;
  }

  obtemMediaValida() {
    return `Média Válida: ${this.calculaMediaValida().toFixed(2)}`;
  }
}

let atleta = new Atleta("João Silva", 14, 60, 1.7, [8.5, 9.0, 7.5, 8.0, 9.2]);

console.log(atleta.obtemNomeAtleta()); // Nome: João Silva
console.log(atleta.obtemIdadeAtleta()); // Idade: 14
console.log(atleta.obtemPesoAtleta()); // Peso: 60
console.log(atleta.obtemNotasAtletas()); // Notas: 8.5,9.0,7.5,8.0,9.2
console.log(atleta.obtemCategoria()); // Intermediário
console.log(atleta.obtemMediaValida()); // Intermediário
// Para testar os métodos calculaIMC e calculaMediaValida, é necessário implementar os retornos desses métodos.
