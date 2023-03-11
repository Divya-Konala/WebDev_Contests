let cartBox=document.querySelector(".items");
const discountPercent=10;
const shippingCharges=80;

function displayProducts() {
    let totalAmount=0;
    let toatalQty=0;
    let products=JSON.parse(localStorage.getItem("cartProducts"))||[];
    cartBox.innerHTML = "";
    if(products.length==0) {
      cartBox.innerHTML=`<h1>Your Cart is Empty</h1>`;
      document.querySelector(".total").style.display="none";
    }
    else
      document.querySelector(".total").style.display="block";
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
      price.innerHTML = `Price: <strong>₹${product.price*product.quantity}</strong>`;
      totalAmount+=product.price*product.quantity;
      toatalQty+=product.quantity;
      let qty = document.createElement("div");
      qty.setAttribute("class", "qty");
      qty.innerHTML = `Qty: <strong>${product.quantity}</strong>`;
      row1.append(price, qty);
      info.append(titleRow,row1);
      let cartBtn = document.createElement("button");
      cartBtn.setAttribute("class", "addBtn");
      cartBtn.textContent = "Remove";
      item.append(img, info, cartBtn);
      cartBox.append(item);
      cartBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        removeFromCart(product);
      })
    });
    totalAmount=(Math.round(totalAmount*100))/100;
    let discount=Math.round(((discountPercent*totalAmount)/100)*100)/100;
    let grandTotal=Math.round((totalAmount-discount+shippingCharges)*100)/100;
    document.querySelector("#totalQty").textContent=`(${toatalQty} items)`;
    document.querySelector("#totalPrice").innerHTML=`₹${totalAmount}`;
    document.querySelector("#discount").textContent=`₹${discount}`;
    document.querySelector("#shipping").textContent=`₹${shippingCharges}`;
    document.querySelector("#grandTotal").textContent=grandTotal;
    localStorage.setItem("grandTotal",JSON.stringify({"totalAmount":grandTotal}));
  }

  displayProducts();

  function removeFromCart(item){
    // console.log(item);
    let products=JSON.parse(localStorage.getItem("cartProducts"));
    // console.log(products);
    products=products.filter((product)=>{
        if(product.id!=item.id) return product;
    })
    // console.log(products);
    localStorage.setItem("cartProducts",JSON.stringify(products));
    displayProducts();
  }