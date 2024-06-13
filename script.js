const productArray = [
  {
    url: "./images/delish-200305-grilled-green-beans-0204-landscape-pf-1584045271 1.png",
    name: "Green Beans",
    rating: "4.9",
    price: "12.00",
    star: "./images/star.png",
  },
  {
    url: "https://images.unsplash.com/photo-1572166365087-96ac83103260?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Red Apples",
    rating: "4.8",
    price: "10.00",
    star: "./images/star.png",
  },
  {
    url: "./images/burger1.png",
    name: "Burger",
    rating: "4.7",
    price: "8.00",
    star: "./images/star.png",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1675366073398-d9030d9455d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Carrots",
    rating: "4.6",
    price: "9.50",
    star: "./images/star.png",
  },
  {
    url: "https://images.unsplash.com/photo-1543158181-e6f9f6712055?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Strawberries",
    rating: "4.9",
    price: "15.00",
    star: "./images/star.png",
  },
  {
    url: "https://images.unsplash.com/photo-1598512752271-33f913a5af13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Tomatoes",
    rating: "4.8",
    price: "11.00",
    star: "./images/star.png",
  },
];

let productsVisible = false;

function handleShowMore() {
  const productContainer = document.getElementById("products");
  const button = document.getElementById("seeMoreBtn");
  console.log("clicked");

  if (!productsVisible) {
    for (const item of productArray) {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product-card");
      productDiv.innerHTML = `

<div style="width:100%;
    height: 252px; overflow:hidden;">
 <img src="${item.url}" alt="" style="width:100%;
    height: auto; ">
          
          </div>
          <div style="padding: 20px 20px 30px 20px">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h3 style="margin: 0;">${item.name}</h3>
              <p><img src="${item.star}" alt=""> ${item.rating}</p>
           
            </div>
            <div style="display: flex; justify-content: space-between;  margin-top: 10px;">
              <button class="product-btn">Add To Cart</button>
              <p>${item.price}</p>
            </div>
          </div>

`;

      productContainer.appendChild(productDiv);
    }
    button.textContent = "See Less Products";
    productsVisible = true;
  } else {
    while (productContainer.hasChildNodes()) {
        productContainer.removeChild(productContainer.children[6]);
      }
    button.textContent = "See More Products";
    productsVisible = false;
  }
}


function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const message = document.getElementById('message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailPattern.test(emailInput.value)) {
      message.textContent = 'SUBSCRIBED successfully';
      message.style.color = 'green';
      emailInput.value = '';
      setTimeout(() => {
        message.textContent = '';
      }, 2000);
    } else {
      message.textContent = 'Enter valid email';
      message.style.color = 'red';
    }
  }