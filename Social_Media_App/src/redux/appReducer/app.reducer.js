import { GET_DATA } from "./app.types";
const initialState={
    data:[],
    cart:[]
}
export const AppReducer=(oldstate=initialState,{type,payload})=>{
    switch(type){
        case GET_DATA:{
            return{
                ...oldstate,
                data:payload
            }
        }
        default:{
            return oldstate
        }
    }
}