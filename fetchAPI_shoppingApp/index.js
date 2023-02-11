const url="https://dummyjson.com/products";
const prodGallery=document.querySelector("#productsGallery");

//to get the data from api
function getData(){
    //fetching data using fetch method which returns a promise that resolves into a Response object.
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
        appendData(data.products);
    })
    .catch((error)=>{
        console.log(error.message);
    })
}
getData();

//to display all the products in document
let appendData = (products) =>{
    products.map((prod)=>{
        console.log(prod);
        //main div containg all the product deatils
        let prodBox= document.createElement("div");
        prodBox.setAttribute("class","prodBox");

        //productImage
        let image=document.createElement("img");
        image.src=`${prod.thumbnail}`;

        //titleBox container which contains title & brand
        let titleBox=document.createElement("div");
        titleBox.setAttribute("class","titleBox");

        //title
        let title=document.createElement("span");
        title.innerHTML=`Title: <strong>${prod.title}</strong>`;

        //brand
        let brand=document.createElement("span");
        brand.innerHTML=`Brand: <strong>${prod.brand}</strong>`;

        titleBox.append(title,brand);

        //price
        let price=document.createElement("p");
        price.innerHTML=`Price: <strong>${prod.price}</strong>`;

        //discount
        let discount=document.createElement("p");
        discount.innerHTML=`Discount: <strong>${prod.discountPercentage}${"%"}</strong>`;

        //rating
        let rating=document.createElement("p");
        rating.innerHTML=`Rating: <strong>${prod.rating}</strong>`;

        //stock
        let stock=document.createElement("p");
        stock.innerHTML=`Stock: <strong>${prod.stock}</strong>`;

        //adding all the elements to prodBox
        prodBox.append(image,titleBox,price,discount,rating,stock);
        
        //adding prodBox div to productsGallery
       prodGallery.append(prodBox);
    })
}