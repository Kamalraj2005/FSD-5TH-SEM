// Utility: Get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Utility: Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add item to cart
function addToCart(item) {
  let cart = getCart();
  const existingItem = cart.find(i => i.title === item.title);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    item.quantity = 1;
    cart.push(item);
  }
  saveCart(cart);
  renderCart();
}

// Remove item
function removeFromCart(title) {
  let cart = getCart().filter(i => i.title !== title);
  saveCart(cart);
  renderCart();
}

// Update quantity
function updateQuantity(title, newQty) {
  let cart = getCart();
  const item = cart.find(i => i.title === title);
  if (item) {
    item.quantity = newQty;
    if (item.quantity <= 0) {
      removeFromCart(title);
      return;
    }
  }
  saveCart(cart);
  renderCart();
}

// Render cart
function renderCart() {
  const cartContainer = document.getElementById("cart-container");
  const cartTotal = document.getElementById("cart-total");
  cartContainer.innerHTML = "";
  cartTotal.innerHTML = "";

  const cart = getCart();
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    const img = document.createElement("img");
    img.src = item.image;   // ✅ product image
    img.alt = item.title;
    img.style.width = "100px";

    const title = document.createElement("h2");
    title.innerText = item.title;

    const price = document.createElement("p");
    price.innerText = item.price;

    const qty = document.createElement("input");
    qty.type = "number";
    qty.value = item.quantity;
    qty.min = 1;
    qty.addEventListener("change", () => {
      updateQuantity(item.title, parseInt(qty.value));
    });

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click", () => {
      removeFromCart(item.title);
    });

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(qty);
    div.appendChild(removeBtn);

    cartContainer.appendChild(div);

    // Calculate total
    const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
    total += numericPrice * item.quantity;
  });

  cartTotal.innerText = "Total: ₹" + total;
}

// Checkout clears cart
function checkout() {
  localStorage.removeItem("cart");
  renderCart();
  alert("Checkout successful! Cart cleared.");
}

// Example: Add items
addToCart({ image: "img1.jpg", title: "Product 1", price: "₹500" });
addToCart({ image: "img2.jpg", title: "Product 2", price: "₹800" });

// Initial render
renderCart();
