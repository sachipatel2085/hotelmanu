
let cart = [];
let total = 0;

function addToCart(item, price) {
    let index = cart.findIndex(x => x.item === item);
    if (index !== -1) {
        cart[index].quantity++;
    } else {
        cart.push({ item, price, quantity: 1 });
    }
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.price} - Quantity: ${item.quantity}`;
        cartList.appendChild(li);
    });
    totalElement.textContent = total.toFixed(2);
}

function placeOrder() {
    // Assuming there's some backend system to handle orders
    // Here, we'll just log the orders to console for demonstration
    console.log("Order placed:", cart);
    console.log("Total:", total.toFixed(2));
    cart = [];
    total = 0;
    updateCart();
    alert("Your order has been placed!");
}

// manu nav logic for teb shifting

let activeTab = 'tab1';

function openTab(event, tabId) {
  event.preventDefault();
  
  document.getElementById(activeTab).classList.remove('active');
  document.getElementById(tabId).classList.add('active');
  
  activeTab = tabId;
}

//for risponsive navbar

