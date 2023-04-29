import { useDispatch, useSelector } from "react-redux";
import {emptyCart} from "../redux/ActionCreators"
const CheckOut = () => {
    const dispatch=useDispatch();
    const products=useSelector(state=>state.cart.data);
    let total=0;
    const handleCheckout=()=>{
        alert("Your items have been checked out successfully!");
        dispatch(emptyCart());
    }
  return (
    <div className='Checkout'>
        <h3>Checkout List</h3>
        <ol>
        {
            products.map((item,index)=>{
                total+=item.price;
                return <li key={index}>
                <p>{index+1}. {item.title}</p>
                <p>₹{item.price}</p>
            </li>
            })
        }
        </ol>
        <div className='total'>
            <p>Total</p>
            <p>₹{total}</p>
        </div>
        <button onClick={handleCheckout}>Checkout</button>
    </div>
  )
}

export default CheckOut