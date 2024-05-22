import TProduto from "./src/tipos/TProduto";

type TBancoDeDados = {
  produtos: TProduto[];
};

const bancoDeDados: TBancoDeDados = {
  produtos: [
    {
      id: 1,
      nome: "Computador Aspire",
      preco: 300000,
      quantidade: 4,
    },
    {
      id: 2,
      nome: "Geladera Top de Linha",
      preco: 800000,
      quantidade: 10,
    },
  ],
};

export default bancoDeDados;
