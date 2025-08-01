# 🛒 Shopee Terminal - Carrinho de Compras Interativo

<p align="center">
  <img src="./src/docs/Demo.gif" alt="Demonstração do terminal Shopee" width="700">
</p>

Este projeto simula um sistema de carrinho de compras inspirado na **Shopee**, totalmente operado via **terminal**, utilizando **Node.js**. O usuário pode interagir com menus interativos para:

- Adicionar produtos ao carrinho ou à lista de desejos
- Remover uma unidade de um produto do carrinho
- Deletar um produto completamente do carrinho
- Visualizar os itens do carrinho e da lista de desejos
- Calcular o total da compra

---

## 📦 Funcionalidades

✅ Menu interativo com seleção de produtos  
✅ Adição de produtos ao carrinho ou wishlist  
✅ Remoção de uma unidade de um item do carrinho  
✅ Exclusão completa de um item do carrinho  
✅ Exibição detalhada de itens e totais  
✅ Lógica modular em arquivos separados (cart, item)

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Inquirer.js](https://www.npmjs.com/package/inquirer) - Para criar menus interativos no terminal
- Módulos ES6 (`import/export`)

---

## 📁 Estrutura do Projeto
```bash
shopee-terminal/
    ├── node_modules
    ├── src
        ├── docs/
            └── demo.gif          # GIF de demonstração do
        ├── services/
            └── cart.js           # Lógica do carrinho (add, remove, delete, total)
            └── item.js           # Criação de produtos
        ├── index.js
    ├── package.json
    ├── README.md
```
---

## 🔧 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/jfjoaofilho/shopee-terminal.git
cd shopee-terminal
```
2. Instale as dependências:

```bash
npm install
```
3. Criar o arquivo 'package.json':
```bash
npm init -y
```
4. Execute o projeto:

```bash
node src/index.js
```
---

## 🛍 Exemplo de Uso
```perl
🛒 Bem-vindo à Shopee Terminal!

✔ Escolha os produtos para adicionar:
◉ Hotwheels Ferrari
◉ Carrinho Bugatti
⬇

Quantas unidades de "Hotwheels Ferrari" você quer? 2  
Adicionar "Hotwheels Ferrari" ao: Carrinho

🛠 Gerenciar Carrinho:
→ Remover 1 unidade de um item
→ Deletar item completamente
→ Finalizar e mostrar resumo

📦 Produtos no Carrinho:
1. Hotwheels Ferrari - R$20.99 x 1 = R$20.99

💡 Lista de Desejos:
1. Carrinho Bugatti - R$60.00 x 1

💰 Total da Compra: R$20.99
```
---

## 📜 Licença
Este projeto está sob a licença MIT.
Feito com 💙 por João Filho.