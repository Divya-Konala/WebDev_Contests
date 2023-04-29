import {useDispatch} from "react-redux"
import {addProductsToCart} from "../redux/ActionCreators"

const Product = ({product}) => {
  const dispatch=useDispatch();
  return (
    <div className="Product">
      <img src={product.images[0]} alt={product.title} />
      <div className="product_desc">
        <p>
          Title: <strong>{product.title}</strong>
        </p>
        <p>
          Price: <strong>₹{product.price}</strong>
        </p>
      </div>
      <button className="addToCart_Btn" onClick={()=>dispatch(addProductsToCart(product))}>Add To Cart</button>
    </div>
  );
};

export default Product;
