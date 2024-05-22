import bancoDeDados from "../bancoDeDados";
import procurarProdutoPeloId from "./funcoes/procurarProdutoPeloId";
import TProduto from "./tipos/TProduto";

// 1) Listar os produtos
const produtosCadastrados: TProduto[] = bancoDeDados.produtos;
console.log(produtosCadastrados);

// 2) Detalhar um produto cadastrado
const idProcurado: number = 1;

const produtoEncontrado: TProduto | string = procurarProdutoPeloId(
  produtosCadastrados,
  idProcurado
);

console.log(produtoEncontrado);
