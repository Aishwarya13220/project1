class Product {
    constructor(id, name, price, stock) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.stock = stock;
    }
   updateStock(quantity) {
      if (this.stock - quantity >= 0) {
        this.stock -= quantity;
      } else {
        console.log(`Not enough stock for ${this.name}`);
      }
    }
  
   display() {
      console.log(`Product: ${this.name} | Price: $${this.price} | Stock: ${this.stock}`);
    }
  }
  
   class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      if (product.stock >= quantity) {
        this.items.push({ product, quantity });
        product.updateStock(quantity); 
        console.log(`${quantity} x ${product.name} added to the cart.`);
      } else {
        console.log(`Not enough stock for ${product.name}.`);
      }
    }
  
     viewCart() {
      if (this.items.length === 0) {
        console.log("Cart is empty.");
        return;
      }
      console.log("Cart contents:");
      this.items.forEach(item => {
        console.log(`${item.quantity} x ${item.product.name} | Total: $${item.product.price * item.quantity}`);
      });
    }
   calculateTotal() {
      return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  }
  class Checkout {
    constructor(cart) {
      this.cart = cart;
    }
   performCheckout(paymentAmount) {
      const total = this.cart.calculateTotal();
      if (paymentAmount >= total) {
        console.log(`Checkout successful! Total: $${total}. Change: $${paymentAmount - total}`);
      } else {
        console.log("Insufficient funds for the checkout.");
      }
    }
  }
  
  const apple = new Product(1, "Apple", 1.5, 10);
  const banana = new Product(2, "Banana", 1.2, 15);
  const orange = new Product(3, "Orange", 2.0, 5);
  
  const cart = new Cart();
  cart.addItem(apple, 3);
  cart.addItem(banana, 5);
  
  cart.viewCart();
  
  
  const checkout = new Checkout(cart);
  checkout.performCheckout(20); 
  console.log(apple);
  console.log(banana);
  console.log(orange);

  