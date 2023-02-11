const url="https://dummyjson.com/products";
const prodContainer=document.querySelector("#productsGallery");

function getData(){
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
        // console.log(data.products);
        appendData(data.products);
    })
    .catch((error)=>{
        console.log(error.message);
    })
}
getData();

let appendData = (products) =>{
    products.map((prod)=>{
        console.log(prod);
        let prodBox= document.createElement("div");
        prodBox.setAttribute("class","prodBox");
        let image=document.createElement("img");
        image.src=`${prod.thumbnail}`;
        let titleBox=document.createElement("div");
        titleBox.setAttribute("class","titleBox");
        let title=document.createElement("span");
        let brand=document.createElement("span");
        title.innerHTML=`Title: <strong>${prod.title}</strong>`;
        brand.innerHTML=`Brand: <strong>${prod.brand}</strong>`;
        let price=document.createElement("p");
        price.innerHTML=`Price: <strong>${prod.price}</strong>`;
        let rating=document.createElement("p");
        rating.innerHTML=`Rating: <strong>${prod.rating}</strong>`;
        let stock=document.createElement("p");
        stock.innerHTML=`Stock: <strong>${prod.stock}</strong>`;
        titleBox.append(title,brand);
        prodBox.append(image,titleBox,price,rating,stock);
        prodContainer.append(prodBox);
    })
}