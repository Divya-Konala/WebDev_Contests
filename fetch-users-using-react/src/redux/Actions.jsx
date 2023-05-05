import * as actionTypes from "./ActionTypes"

const validateUserRequest=()=>({
    type:actionTypes.VALIDATE_USER_FETCH_REQUEST
})

const validateUserSuccess=(data)=>({
    type:actionTypes.VALIDATE_USER_SUCCESS,
    payload:data
})

const validateUserFailure=(error)=>({
    type:actionTypes.VALIDATE_USER_FAILURE,
    payload:error
})

export const validateUser=(username,password)=>(
    function (dispatch){
        dispatch(validateUserRequest);
        fetch("https://dummyjson.com/auth/login",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                username:username,
                password:password
            })
        })
        .then(res=> res.json())
        .then((data)=>{
            if(data.message) throw new Error(data.message)
            else dispatch(validateUserSuccess(data))
        })
        .catch(error=>dispatch(validateUserFailure(error.message)))
    }
)

const fetchUserRequest=()=>({
    type:actionTypes.FETCH_USER_REQUEST
})

const fetchUserSuccess=(data)=>({
    type:actionTypes.FETCH_USER_SUCCESS,
    payload:data
})

const fetchUserFailure=(error)=>({
    type:actionTypes.FETCH_USER_FAILURE,
    payload:error
})

export const fetchUser=(id)=>( 
    function(dispatch){
        dispatch(fetchUserRequest);
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            if(data.message)throw new Error(data.message)
            else dispatch(fetchUserSuccess(data))
        })
        .catch(error=>{
            dispatch(fetchUserFailure(error.message));
        })
    }
)