import axios from "axios"
import {FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE,ADD_PRODUCTS_TO_CART,REMOVE_PRODUCTS_FROM_CART,EMPTY_CART} from "./Actions"

export const fetchProductsRequest=()=>(
    {
        type:FETCH_PRODUCTS_REQUEST,
    }
)
export const fetchProductsSuccess=(data)=>(
    {
        type:FETCH_PRODUCTS_SUCCESS,
        payload:data
    }
)

export const fetchProductsFailure=(error)=>(
    {
        type:FETCH_PRODUCTS_FAILURE,
        payload:error
    }
)

export const fetchProducts=()=>(
    function (dispatch){
        dispatch(fetchProductsRequest);
        axios.get("https://dummyjson.com/products")
        .then(res=>{
            // console.log(res.data.products);
            dispatch(fetchProductsSuccess(res.data.products))
        })
        .catch(error=>{
            // console.log(error.message);
            dispatch(fetchProductsFailure(error.message))
        })
    }
)

export const addProductsToCart=(data)=>({
    type:ADD_PRODUCTS_TO_CART,
    payload:data
})

export const removeProductsFromCart=(data)=>({
    type:REMOVE_PRODUCTS_FROM_CART,
    payload:data
})

export const emptyCart=()=>({
    type:EMPTY_CART
})

