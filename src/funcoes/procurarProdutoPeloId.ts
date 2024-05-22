import TProduto from "../tipos/TProduto";

function procurarProdutoPeloId(
  produtosCadastrados: TProduto[],
  idProcurado: number
): TProduto | string {
  let produtoEncontrado: TProduto | undefined = produtosCadastrados.find(
    (produto) => produto.id === idProcurado
  );

  if (!produtoEncontrado) {
    return "Produto não encontrado";
  } else {
    return produtoEncontrado;
  }
}

export default procurarProdutoPeloId;
