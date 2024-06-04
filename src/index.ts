import prompt from "prompt-sync";
import bancoDeDados from "../bancoDeDados";
import TProduto from "./tipos/TProduto";
import { prependOnceListener } from "process";

const linhaDeComando = prompt();

console.clear();

console.log(`
Bem vindo à aplicação de gerenciamento de estoque!

0. Sair
1. Listar os produtos cadastrados
2. Detalhar um produto cadastrados
3. Cadastrar um produto
4. Editar um produto
5. Deletar um produto
6. Calcular a quantia em estoque
7. Filtrar por nome
8. Filtrar por preços
`);

const opcaoSelecionada: number = Number(linhaDeComando("Digite uma opção: "));
const produtosCadastrados: TProduto[] = bancoDeDados.produtos;

if (opcaoSelecionada === 1) {
  console.log(produtosCadastrados);
} else if (opcaoSelecionada === 2) {
  const idDigitado: number = Number(
    linhaDeComando("Digite o identificador do produto: ")
  );
  const produtoEncontrado: TProduto | undefined = produtosCadastrados.find(
    (produto) => produto.id === idDigitado
  );

  if (!produtoEncontrado) {
    console.log("Produto não encontrado");
  } else {
    console.log(produtoEncontrado);
  }
} else if (opcaoSelecionada === 3) {
  const proximoId = bancoDeDados.proximoId;
  const nomeDigitado = linhaDeComando("Digite o nome do novo produto: ");
  const precoDigitado = Number(
    linhaDeComando("Digite o preço do novo produto: ")
  );
  const quantidadeDigitada = Number(
    linhaDeComando("Digite a quantidade do novo produto: ")
  );

  const novoProduto: TProduto = {
    id: proximoId,
    nome: nomeDigitado,
    preco: precoDigitado,
    quantidade: quantidadeDigitada,
  };

  produtosCadastrados.push(novoProduto);

  bancoDeDados.proximoId++;

  console.log("\nProduto cadastrado");
  console.log(produtosCadastrados);
} else if (opcaoSelecionada === 4) {
  console.log("Editar um produto");
} else if (opcaoSelecionada === 5) {
  console.log("Deletar um produto");
} else if (opcaoSelecionada === 6) {
  console.log("Calcular a quantia em estoque");
} else if (opcaoSelecionada === 7) {
  console.log("Filtrar por nome");
} else if (opcaoSelecionada === 8) {
  console.log("Filtrar por preços");
} else if (opcaoSelecionada === 0) {
  console.log("Sair");
} else {
  console.log("Opção inválida");
}

linhaDeComando("\nPressione enter para continuar...");
