# Sistema de gestão de estoque

## Contexto

A empresa em que trabalha vende uma variedade de produtos, desde eletrônicos até itens de vestuário. Para gerenciar de forma eficiente o inventário, ela decidiu implementar um sistema de controle de estoque que permitirá aos funcionários e gerentes a administração completa dos produtos disponíveis. O sistema deve oferecer funcionalidades para cadastrar, listar, editar, detalhar, deletar e gerenciar os produtos de forma prática e intuitiva

## Tipo Produto

Cada produto possui os seguintes campos

- id: identificador numérico único e autoincremento
- nome: texto que armazena o nome do produto
- preco: número que armazena o preço do produto (armazenamento em centavos)
- quantidade: número que armazena a quantidade do produto em estoque

## Funcionalidades

Sua aplicação deve permitir ao usuário (funcionários da empresa):

- Listar os produtos cadastrados
- Detalhar um produto cadastrado pelo id
- Cadastrar um produto
- Editar um produto
- Deletar um produto
- Calcular a quantia em dinheiro em estoque
- Filtrar por nome
- Filtrar por preços

## Optativo

- Crie um menu que permita ao usuário selecionar a funcionalidade que ele deseja digitando um número:

0. Sair
1. Listar os produtos cadastrados
2. Detalhar um produto cadastrados
3. Cadastrar um produto
4. Editar um produto
5. Deletar um produto
6. Calcular a quantia em estoque
7. Filtrar por nome
8. Filtrar por preços

- Criar uma funcionalidade para vender um produto, onde é passado o id do produto vendido e a quantidade. Deve-se verificar se a quantia vendida tem em estoque
