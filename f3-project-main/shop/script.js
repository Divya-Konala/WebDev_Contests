let url = "https://fakestoreapi.com/products";
let sizes = ["S", "M", "L", "XL"];
let colors = ["red", "blue", "green", "black", "white"];
let priceRange=["range1","range2","range3","range4"]

let inputFields = {
  category: "All Items",
  colors: {
    red: false,
    blue: false,
    green: false,
    black: false,
    white: false
  },
  sizes: {
    S: false,
    M: false,
    L: false,
    XL: false
  },
  ratingRange: {
    isChanged: false,
    rate: 0
  },
  priceRange:{
    range1:false,
    range2:false,
    range3:false,
    range4:false
  },
  search:{
    value:""
  }
};

(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => storeProducts(data))
    .then((products) => displayProducts(products))
    .catch((err) => console.log(err.message));
})();

function storeProducts(data) {
  let products = data;
  products.map((product) => {
    product.size = setSize();
    product.colors = setColors();
  });
  localStorage.setItem("products", JSON.stringify(products));
  return JSON.parse(localStorage.getItem("products"));
}
function setSize() {
  let arr = selectTwoRandomNumbers(sizes.length);
  let sizesArr = [sizes[arr[0]], sizes[arr[1]]];
  return sizesArr;
}
function setColors() {
  let arr = selectTwoRandomNumbers(colors.length);
  let colorsArr = [colors[arr[0]], colors[arr[1]]];
  return colorsArr;
}
function selectTwoRandomNumbers(n) {
  let res = [];
  for (let i = 0; i < 2; i++) {
    let rand = Math.floor(Math.random() * n);
    res[i] = rand;
    if (i == 1 && res[0] == res[1]) i--;
  }
  return res;
}

let items = document.querySelector(".items");

function displayProducts(products) {
  items.innerHTML = "";
  document.querySelector("#category").textContent = inputFields.category;
  products.map((product) => {
    let item = document.createElement("div");
    item.setAttribute("class", "item");
    let img = document.createElement("img");
    img.src = product.image;
    let info = document.createElement("div");
    info.setAttribute("class", "info");
    let titleRow=document.createElement("div");
    titleRow.setAttribute("class","row");
    titleRow.setAttribute("class","titleRow");
    titleRow.innerHTML=`<strong>${product.title}</strong>`
    let row1 = document.createElement("div");
    row1.setAttribute("class", "row");
    let price = document.createElement("div");
    price.setAttribute("class", "price");
    price.textContent = `₹${product.price}`;
    let sized = document.createElement("div");
    sized.setAttribute("class", "sized");
    sized.textContent = `${product.size[0]}, ${product.size[1]}`;
    row1.append(price, sized);
    let colors = document.createElement("div");
    colors.setAttribute("class", "colors");
    colors.textContent = "Colors:";
    let row2 = document.createElement("div");
    row2.setAttribute("class", "row");
    for (let i = 0; i < product.colors.length; i++) {
      let circle = document.createElement("div");
      circle.setAttribute("class", "circle");
      circle.style.backgroundColor = product.colors[i];
      row2.append(circle);
    }
    colors.append(row2);
    let row3 = document.createElement("div");
    row3.setAttribute("class", "row");
    row3.textContent = `Rating: ${product.rating.rate}`;
    info.append(titleRow,row1, colors, row3);
    let cartBtn = document.createElement("button");
    cartBtn.setAttribute("class", "addBtn");
    cartBtn.textContent = "Add to Cart";
    item.append(img, info, cartBtn);
    items.append(item);
    cartBtn.addEventListener("click",(e)=>{
      e.preventDefault();
      addToCart(product);
    })
  });
}

let filters = document.querySelectorAll(".filter");
let categories = [
  "All Items",
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];
for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", () => {
    let currActive = document.querySelector(".active");
    currActive.classList.remove("active");
    filters[i].classList.add("active");
    let category = categories[i];
    inputFields.category = category;
    filterProducts();
  });
}


function filterProducts() {
  let filteredProducts = JSON.parse(localStorage.getItem("products"));
  //category filter
  if (inputFields.category != "All Items") {
    filteredProducts = filteredProducts.filter((item) => {
      if (item.category == inputFields.category) return item;
    });
  }
  // color filter
  if (
    inputFields.colors.red == true ||
    inputFields.colors.blue == true ||
    inputFields.colors.green == true ||
    inputFields.colors.black == true ||
    inputFields.colors.white == true
  ) {
    filteredProducts = filteredProducts.filter((item) => {
      if (
        (inputFields.colors[colors[0]] && isOfColor(item, colors[0])) ||
        (inputFields.colors[colors[1]] && isOfColor(item, colors[1])) ||
        (inputFields.colors[colors[2]] && isOfColor(item, colors[2])) ||
        (inputFields.colors[colors[3]] && isOfColor(item, colors[3])) ||
        (inputFields.colors[colors[4]] && isOfColor(item, colors[4]))
      )
        return item;
    });
  }
  //sizes filter
  if (
    inputFields.sizes.S == true ||
    inputFields.sizes.M == true ||
    inputFields.sizes.L == true ||
    inputFields.sizes.XL == true
  ) {
    filteredProducts = filteredProducts.filter((item) => {
      if (
        (inputFields.sizes[sizes[0]] && isOfSize(item, sizes[0])) ||
        (inputFields.sizes[sizes[1]] && isOfSize(item, sizes[1])) ||
        (inputFields.sizes[sizes[2]] && isOfSize(item, sizes[2])) ||
        (inputFields.sizes[sizes[3]] && isOfSize(item, sizes[3]))
      )
        return item;
    });
  }
  //rating filter
  if(inputFields.ratingRange.isChanged){
    filteredProducts = filteredProducts.filter((item)=>{
      if(Math.round(item.rating.rate)==inputFields.ratingRange.rate) return item;
    })
  }
  //price filter
  if (
    inputFields.priceRange.range1 == true ||
    inputFields.priceRange.range2 == true ||
    inputFields.priceRange.range3 == true ||
    inputFields.priceRange.range4 == true
  ) {
    filteredProducts = filteredProducts.filter((item) => {
      if (
        (inputFields.priceRange[priceRange[0]] && isOfPriceRange(item, priceRange[0])) ||
        (inputFields.priceRange[priceRange[1]] && isOfPriceRange(item, priceRange[1])) ||
        (inputFields.priceRange[priceRange[2]] && isOfPriceRange(item, priceRange[2])) ||
        (inputFields.priceRange[priceRange[3]] && isOfPriceRange(item, priceRange[3]))
      )
        return item;
    });
  }
  //search filter
  if(inputFields.search.value!=""){
    let inputValue=inputFields.search.value;
    filteredProducts=filteredProducts.filter((item)=>item.title.includes(inputValue));
  }
  displayProducts(filteredProducts);
}

let searchbar = document.querySelector("#searchBar");
searchbar.addEventListener("change", () => {
  // let products = JSON.parse(localStorage.getItem("products"));
  // products = products.filter((item) => item.title.includes(value));
  // displayProducts(products);
  inputFields.search.value = searchbar.value;
  filterProducts();
});

let inputs = document.querySelectorAll("input");

//colors
for (let i = 0; i <= 4; i++) {
  inputs[i].addEventListener("change", () => {
    if (inputs[i].checked) {
      inputFields.colors[colors[i]] = true;
    } else {
      inputFields.colors[colors[i]] = false;
    }
    filterProducts();
  });
}

//sizes
for (let i = 5; i <= 8; i++) {
  inputs[i].addEventListener("change", () => {
    if (inputs[i].checked) {
      inputFields.sizes[sizes[i-5]] = true;
    } else {
      inputFields.sizes[sizes[i-5]] = false;
    }
    filterProducts();
  });
}

//ratingRange
inputs[9].addEventListener("change",()=>{
  if(inputs[9].value==0){
    inputFields.ratingRange.isChanged=false;
  }
  else{
    inputFields.ratingRange.isChanged=true;
  }
  inputFields.ratingRange.rate=inputs[9].value; 
  filterProducts();
})

//priceRange
for (let i = 10; i <= 13; i++) {
  inputs[i].addEventListener("change", () => {
    if (inputs[i].checked) {
      inputFields.priceRange[priceRange[i-10]] = true;
    } else {
      inputFields.priceRange[priceRange[i-10]] = false;
    }
    filterProducts();
  });
}

function isOfColor(item, color) {
  for (let i = 0; i < item.colors.length; i++) {
    if (item.colors[i] == color) return true;
  }
  return false;
}

function isOfSize(item, size) {
  for (let i = 0; i < item.size.length; i++) {
    if (item.size[i] == size) return true;
  }
  return false;
}

function isOfPriceRange(item,range){
  let min=0,max=0;
  if(range=="range1"){min=0; max=25}
  else if(range=="range2"){min=25; max=50}
  else if(range=="range3"){min=50; max=100}
  else {min=100; max=Infinity}
  if(item.price>=min && item.price<=max) return true;
  return false;
}

function addToCart(item){
  let products=JSON.parse(localStorage.getItem("cartProducts"))||[];
  let newProduct=item;
  let isExistingProduct=false;
  products.map((product)=>{
    if(product.id==newProduct.id){
      product.quantity++;
      isExistingProduct=true;
    }
  })
  if(!isExistingProduct){
    newProduct.quantity=1;
    products.push(newProduct);
  }
  localStorage.setItem("cartProducts",JSON.stringify(products));
}
