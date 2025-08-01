import inquirer from "inquirer";
import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("🛒 Bem-vindo à Shopee Cart!\n");

const availableProducts = [
    { name: "Hotwheels Ferrari", price: 20.99 },
    { name: "Hotwheels Lamborghini", price: 39.99 },
    { name: "Miniatura Porsche", price: 45.50 },
    { name: "Carrinho Bugatti", price: 60.00 },
    { name: "Hotwheels Camaro", price: 30.99 },
];

async function main() {
    const answers = await inquirer.prompt([
        {
            type: "checkbox",
            name: "selectedProducts",
            message: "Escolha os produtos para adicionar:",
            choices: availableProducts.map((p) => p.name),
        },
    ]);

    for (const selected of answers.selectedProducts) {
        const product = availableProducts.find((p) => p.name === selected);
        const { quantity, destination } = await inquirer.prompt([
            {
                type: "number",
                name: "quantity",
                message: `Quantas unidades de "${selected}" você quer?`,
                default: 1,
                validate: (val) => (val > 0 ? true : "Quantidade deve ser maior que 0"),
            },
            {
                type: "list",
                name: "destination",
                message: `Adicionar "${selected}" ao: `,
                choices: ["Carrinho", "Lista de Desejos"],
            },
        ]);

        const item = await createItem(product.name, product.price, quantity);

        if (destination === "Carrinho") {
            await cartService.addItem(myCart, item);
        } else {
            myWhishList.push(item);
        }
    }

    async function manageCart() {
        let managing = true;
      
        while (managing && myCart.length > 0) {
          console.log("\n🛠 Gerenciar Carrinho:");
          await cartService.displaycart(myCart);
      
          const { action } = await inquirer.prompt([
            {
              type: "list",
              name: "action",
              message: "O que deseja fazer com o carrinho?",
              choices: [
                "Remover 1 unidade de um item",
                "Deletar item completamente",
                "Finalizar e mostrar resumo"
              ],
            },
          ]);
      
          if (action === "Finalizar e mostrar resumo") {
            managing = false;
            break;
          }
      
          const { itemName } = await inquirer.prompt([
            {
              type: "list",
              name: "itemName",
              message: "Escolha o item:",
              choices: myCart.map((item) => item.name),
            },
          ]);
      
          if (action === "Remover 1 unidade de um item") {
            await cartService.removeItem(myCart, itemName);
          } else if (action === "Deletar item completamente") {
            await cartService.deleteItem(myCart, itemName);
          }
        }
      } 
    
    await manageCart();

    // Exibir resultado
    console.log("\n📦 Produtos no Carrinho:");
    await cartService.displaycart(myCart);

    console.log("\n💡 Produtos na Lista de Desejos:");
    myWhishList.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} x ${item.quantity}`);
    });

    await cartService.calculateTotal(myCart);
}

main();

// const item1 = await createItem("hotwheels ferrari", 20.99, 1);
// const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// // adicionei dois itens ao carrinho
// await cartService.addItem(myCart, item1);
// await cartService.addItem(myCart, item2);

// await cartService.removeItem(myCart, item2);
// await cartService.removeItem(myCart, item2);

// await cartService.displaycart(myCart);

// // deletei dois itens do carrinho
// // await cartService.deleteItem(myCart, item2.name);
// // await cartService.deleteItem(myCart, item1.name);

// await cartService.calculateTotal(myCart);
