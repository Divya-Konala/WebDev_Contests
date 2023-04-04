import axios from "axios";
import { GET_DATA } from "./app.types";


export const getData=()=>async(dispatch)=>{
    return await axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        dispatch({
            type:GET_DATA,
            payload:res.data
        })
    }).catch((err)=>{
        console.log({message:err.message})
    })
}