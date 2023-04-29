// import { useEffect, useState } from "react"
import CheckOut from "./CheckOut";
import { useSelector, useDispatch } from "react-redux";
import {removeProductsFromCart} from "../redux/ActionCreators"

const Cart = () => {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.cart.data);
  // const [products,setProducts]=useState([]);
  // const [clicked,setClicked]=useState(false);
  // const removeFromCart=async (id)=>{
  //   setClicked(true);
  //   const cartProducts=JSON.parse(localStorage.getItem("cart_products"));
  //   const filteredProducts=await cartProducts.filter(item=>item.id!==id);
  //   localStorage.setItem("cart_products",JSON.stringify(filteredProducts));
  // }
  // useEffect(()=>{
  //   setProducts(JSON.parse(localStorage.getItem("cart_products"))||[]);
  //   setClicked(false)
  // },[clicked])
  if(products.length==0) return <h1 className="empty_cart">your cart is empty</h1>
  return (
    <div className="Cart">
      <div className="cartProducts">
      {
        products.map(product=><div key={product.id} className="Product">
          <img src={product.images[0]} alt={product.title} />
      <div className="product_desc">
        <p>
          Title: <strong>{product.title}</strong>
        </p>
        <p>
          Price: <strong>₹{product.price}</strong>
        </p>
      </div>
      <button className="addToCart_Btn" onClick={()=>dispatch(removeProductsFromCart(product))}>Remove From Cart</button>  
        </div>
        )
      }
    </div>
    <CheckOut products={products}/>
    </div>
  )
}

export default Cart