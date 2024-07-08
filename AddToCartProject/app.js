//! Declaration of An Array of Objects.....
let AllProducts = [
  {
    id: 1,
    name: "HTML",
    image: "HTML5.png",
    price: "1000",
    rating: 5,
  },
  {
    id: 2,
    name: "CSS",
    image: "CSS3.png",
    price: "1500",
    rating: 4,
  },
  {
    id: 3,
    name: "JavaScript",
    image: "JS.png",
    price: "2000",
    rating: 5,
  },
  {
    id: 4,
    name: "JQuery",
    image: "JQuery.png",
    price: "3000",
    rating: 3,
  },
  {
    id: 5,
    name: "React",
    image: "React.png",
    price: "5500",
    rating: 5,
  },
  {
    id: 6,
    name: "Angular",
    image: "Angular.png",
    price: "7000",
    rating: 5,
  },
];

//! Finding The Element From HTML File......
const body = document.querySelector("body");
const products = document.querySelector(".products");
const shoppingBasket = document.querySelector(".shopping-basket");
const closeCart = document.querySelector(".close");
const productsList = document.querySelector(".product-list");
const quantity = document.querySelector(".quantity");
const total = document.querySelector(".total");

//! Add a Class to the Body element....
shoppingBasket.onclick = () => {
  body.classList.add("active");
};

//! Close The Shopping Cart....
closeCart.onclick = () => {
  body.classList.remove("active");
};

let addLists = []; //? Declaring And Initializing Array of Cart Items.....

//! Design And Display The Card....
function onInit() {
  AllProducts.forEach((item, key) => {
    //console.log(item, key);
    let div = document.createElement("div");
    div.classList.add("item");

    let star = "";
    for (let i = 0; i < item.rating; i++) {
      //console.log(i);
      star += `<i class="fa fa-star"></i>`;
    }

    div.innerHTML = `
      <img src="./Images/${item.image}" alt="${item.name}"/>
      <div class="name">${item.name}</div>
      <div class="rating">${star}</div>
      <div class="price"><small>$</small>${item.price}</div>
      <button onclick="addToCart(${key})"><i class="fa fa-cart-plus"></i>Add to Cart</button>
      `;
    products.appendChild(div);
  });
}
onInit();

//! Adding Items to Cart.....
function addToCart(id) {
  //console.log(AllProducts[id]);
  if (addLists[id] == null) {
    addLists[id] = AllProducts[id];
    addLists[id].quantity = 1;
    //console.log(addLists[id]);
  } else {
    addLists[id].quantity++;
    //console.log(addLists[id]);
  }
  showCart();
}

//! Showing CartList.....
function showCart() {
  let count = 0;
  let totalPrice = 0;
  productsList.innerHTML = "";
  addLists.forEach((item, key) => {
    //console.log(item);
    totalPrice += parseInt(item.price * item.quantity);
    count += item.quantity;
    let li = document.createElement("li");
    li.innerHTML = `
     <img src="./Images/${item.image}" alt="${item.name}"/>
     <div>${item.name}</div>
     <div><small>$</small>${item.price}</div>
     <div>
      <button onclick = "changeQuantity(${key},${item.quantity - 1})">-</button>
      <div class="count">${item.quantity}</div>
      <button onclick = "changeQuantity(${key},${item.quantity + 1})">+</button>
     </div>
    `;
    productsList.appendChild(li);
  });
  total.innerHTML = `<small>Total (${count} items)</small>$` + totalPrice;
  quantity.innerHTML = count;
}

//! Removing Items from Cart..... And Changing Quantity..
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete addLists[key];
  } else {
    addLists[key].quantity = quantity;
  }
  showCart();
}
