import {combineReducers} from "redux"
import * as actionTypes from "./ActionTypes";

const validationInitialState = {
  searching: false,
  data: [],
  error: "",
  loggedIn:false
};

const validateReducer = (state = validationInitialState, action) => {
  switch (action.type) {
    case actionTypes.VALIDATE_USER_FETCH_REQUEST:
      return { ...state, searching: true };
    case actionTypes.VALIDATE_USER_SUCCESS:
      return { ...state, searching: false, data: action.payload, loggedIn: true};
    case actionTypes.VALIDATE_USER_FAILURE:
        return {...state, searching:false , error:action.payload};
    default: return state
  }
};


const userInitialState={
  loading:true,
  data:[],
  error:""
}

const userReducer=(state=userInitialState,action)=>{
  switch(action.type){
    case actionTypes.FETCH_USER_REQUEST:
      return {...state, loading:true};
    case actionTypes.FETCH_USER_SUCCESS:
      return {...state, loading:false,data:action.payload}
    case actionTypes.FETCH_USER_FAILURE:
      return {...state, loading:false, error:action.payload}
    default: return state
  }
}

export const rootReducer=combineReducers({
    validate:validateReducer,
    user:userReducer
})
