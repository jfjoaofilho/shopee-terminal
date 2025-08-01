export async function addItem(cart, item) {
    const index = cart.findIndex(p => p.name.toLowerCase() === item.name.toLowerCase());
    if (index !== -1) {
      cart[index].quantity += item.quantity;
      cart[index].total = cart[index].price * cart[index].quantity;
    } else {
      cart.push(item);
    }
  }
  
  export async function removeItem(cart, itemName) {
    const index = cart.findIndex(p => p.name.toLowerCase() === itemName.toLowerCase());
    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        cart[index].total = cart[index].price * cart[index].quantity;
      } else {
        cart.splice(index, 1);
      }
    }
  }
  
  export async function deleteItem(cart, itemName) {
    const index = cart.findIndex(p => p.name.toLowerCase() === itemName.toLowerCase());
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
  
  export async function displaycart(cart) {
    if (cart.length === 0) {
      console.log("🛒 Carrinho vazio.");
      return;
    }
    cart.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - R$${item.price} x ${item.quantity} = R$${item.total.toFixed(2)}`);
    });
  }
  
  export async function calculateTotal(cart) {
    const total = cart.reduce((sum, item) => sum + item.total, 0);
    console.log(`\n💰 Total da Compra: R$${total.toFixed(2)}\n`);
  }  